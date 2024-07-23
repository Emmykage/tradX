import {
  createChart,
  ColorType,
  IChartApi,
  LineStyle,
  LastPriceAnimationMode,
  CrosshairMode,
  UTCTimestamp,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import { useCookies } from "react-cookie";

import useSocketConnect from "../../../../hooks/useSocketConnect";
import useMarketData from "api/marketData/useMarketData";
import useMarketAssets from "api/marketData/useMarketAssets";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  setAssets,
  setCrypto,
  setInitialCrypto,
  setCurrentSymbol,
} from "@store/slices/markets";
import { MainChartProps, MarketData, TransformedMarket } from "./types";
import { convertTimestampToDateString, dateFormter, getPreviousDayFromTimestamp } from "helpers/dateFormter";
import useGetClock from "api/marketData/useGetClock";
import { createCustomMarker1, createCustomMarker2, createCustomMarker3 } from "./Markers";



const MainChart: React.FunctionComponent<any>  = ({ data: newData,colors }) => {
  // rename data being passed down to new data so it wont confilict real data thats coming from the socket 
  
  const [cookies] = useCookies(["access_token"]);

  const { mutate: marketDataMutation, data: market } = useMarketData({});
  const { mutate: assetsListMutate } = useMarketAssets({});
  const { mutate: getClockMutate, data: clockData } = useGetClock({});

  const markets = useAppSelector((state) => state.markets);
  const { wsTicket } = useAppSelector((state) => state.user);
  const userState = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(userState);
  const { data: socketData, socket } = useSocketConnect(wsTicket as string);

  const data: MarketData[] = markets.crypto[markets.currentSymbol];

  useEffect(() => {
    getClockMutate(cookies.access_token);
  }, []);

  useEffect(() => {
    if (clockData) {
      const startTimeFormatted = getPreviousDayFromTimestamp(clockData.timestamp)
      const endTimeFormatted = convertTimestampToDateString(clockData.timestamp)
      marketDataMutation({
        token: cookies.access_token,
        options: {
          symbols: markets.symbol,
          start: startTimeFormatted,
          end: endTimeFormatted,
        },
      });
    }
  }, [markets.symbol, clockData]);

  useEffect(() => {
    // Load the list of assets
    assetsListMutate(
      {
        token: cookies.access_token,
        data: {
          asset_class: "crypto",
        },
      },
      {
        onSuccess: (data) => {
          dispatch(setAssets(data));
        },
      }
    );
  }, [cookies.access_token]);

  useEffect(() => {
    if (market && typeof market === "object") {
      const transformedMarket: TransformedMarket = {};
      Object.keys(market).forEach((key) => {
        transformedMarket[key] = [];

        market[key].forEach((item: any) => {
          // Check if the timestamp exists in the initial data
          const initialDataTimestampExists = market[key].some(
            (initialItem: { time: any }) => initialItem.time === item.timestamp
          );

          const existingIndex = transformedMarket[key].findIndex(
            (existingItem) => existingItem?.time === item?.timestamp
          );

          if (existingIndex === -1 && !initialDataTimestampExists) {
            // Add new data point only if the timestamp doesn't exist
            transformedMarket[key].push({
              ...item,
              time: item.timestamp,
              value: item.open,
            });
          } else if (existingIndex !== -1) {
            // Update existing data point if the timestamp exists
            transformedMarket[key][existingIndex] = {
              ...item,
              time: item.timestamp,
              value: item.open,
            };
          }
        });

        transformedMarket[key].sort((a, b) => a.time - b.time);
      });

      dispatch(setInitialCrypto(transformedMarket));

      dispatch(setCurrentSymbol(markets?.symbol));

      socket?.send(
        JSON.stringify({
          type: "join_room",
          room_name: markets.wsRoom,
        })
      );
    }
  }, [market, socket]);

  useEffect(() => {
    if (markets?.crypto[markets?.symbol]?.length > 0) {
      dispatch(setCrypto(socketData));
    }
  }, [socketData, crypto]);

  const {
    backgroundColor = "transparent",
    lineColor = "#0094FF",
    textColor = "#70808C",
    areaTopColor = "rgba(11, 166, 238, 0.2)",
    areaBottomColor = "rgba(11, 166, 238, 0)",
    gridLines = "#ffccff",
  } = colors || {};

  const chartContainerRef = useRef<HTMLDivElement>(null);

  const chartRef = useRef<IChartApi>();

  useEffect(() => {
    const chartContainer = chartContainerRef.current!;
    const chart = createChart(chartContainer, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      grid: {
        vertLines: {
          color: "#16171a",
          visible: true,
        },
        horzLines: {
          color: "#16171a",
          visible: true,
        },
      },
      rightPriceScale: {
        borderVisible: false,
        textColor: "#868788",
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: true,
        rightOffset: 30,
        allowShiftVisibleRangeOnWhitespaceReplacement: true,
      },
      width: chartContainer.clientWidth,
      height: 300,
    });


    //  candle series 

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: 'green',
      downColor: 'red',
      borderDownColor: 'red',
      borderUpColor: 'green',
      wickDownColor: 'red',
      wickUpColor: 'green',
  });


  candlestickSeries.setData(newData);

    // const newSeries = chart.addAreaSeries({
    //   lineColor,
    //   lineWidth: 1,
    //   topColor: areaTopColor,
    //   bottomColor: areaBottomColor,
    //   priceLineColor: "#868788",
    //   priceLineStyle: LineStyle.Solid,
    //   priceLineWidth: 1,
    //   lastPriceAnimation: LastPriceAnimationMode.OnDataUpdate,
    // });

    // // simple marker lightchart marker 
    // const priceLine = newSeries.createPriceLine({
    //   price: 1.82,
    //   color: 'rgba(0, 0, 0, 0)',
    //   lineWidth: undefined,
    //   axisLabelVisible: false,
    // });

    
    // Custom markers with inline css append to chartContainer 
    // Pass parameters down or up and value 
    const textElement1 = createCustomMarker1('1.21')
    chartContainer.appendChild(textElement1);

     // pass parameters down or up and value
    const textElement2 = createCustomMarker2("100",'up')
    chartContainer.appendChild(textElement2);

     // pass parameters down or up and value
    const textElement3 = createCustomMarker3('85','up')
    chartContainer.appendChild(textElement3);

    // Position text element
    const updatePosition1 = () => {
      const priceCoordinate = candlestickSeries.priceToCoordinate(6.577625846137605);
      let timeCoordinate = chart.timeScale().timeToCoordinate(1706816460 as UTCTimestamp);

      console.log('Price coordinate:', priceCoordinate);
      console.log('Time coordinate:', timeCoordinate);
      if (timeCoordinate === null) {

        // If the specified time is not found use the first visible time
        const visibleRange = chart.timeScale().getVisibleRange();
        if (visibleRange) {
          timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
        }
      }

      if (priceCoordinate && timeCoordinate) {
        textElement1.style.top = `${(priceCoordinate - textElement1.offsetHeight  / 2) + 60}px`;
        textElement1.style.left = `${timeCoordinate + 95}px`;
        console.log('Text position updated');
      }else{
        console.log('failed to get coordinates');
      }
    };


    const updatePosition2 = () => {
      const priceCoordinate = candlestickSeries.priceToCoordinate(-16.964833295409413);

     

      let timeCoordinate = chart.timeScale().timeToCoordinate(1706814120 as UTCTimestamp);

      console.log('Price coordinate:', priceCoordinate);
      console.log('Time coordinate:', timeCoordinate);
      if (timeCoordinate === null) {
        // If the specified time is not found use the first visible time
        const visibleRange = chart.timeScale().getVisibleRange();
        if (visibleRange) {
          timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
        }
      }

      if (priceCoordinate && timeCoordinate) {
        textElement2.style.top = `${(priceCoordinate - textElement2.offsetHeight / 2) + 60 }px`;
        textElement2.style.left = `${timeCoordinate + 98}px`;
        console.log('Text position updated');
      }else{
        console.log('failed to get coordinates');
      }
    };

    const updatePosition3 = () => {
      const priceCoordinate = candlestickSeries.priceToCoordinate(-16.964833295409413);


      let timeCoordinate = chart.timeScale().timeToCoordinate(1706814120 as UTCTimestamp);

      console.log('Price coordinate:', priceCoordinate);
      console.log('Time coordinate:', timeCoordinate);
      if (timeCoordinate === null) {
        // If the specified time is not found use the first visible time
        const visibleRange = chart.timeScale().getVisibleRange();
        if (visibleRange) {
          timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
        }
      }

      if (priceCoordinate && timeCoordinate) {
        textElement3.style.top = `${(priceCoordinate - textElement3.offsetHeight / 2) +30 }px`;
        textElement3.style.left = `${timeCoordinate + 110}px`;
        console.log('Text position updated');
      }else{
        console.log('failed to get coordinates');
      }
    };

    chart.subscribeCrosshairMove(updatePosition1);
    updatePosition1();

    chart.subscribeCrosshairMove(updatePosition2);
    updatePosition2();

    chart.subscribeCrosshairMove(updatePosition3);
    updatePosition3();


    candlestickSeries.setData(newData);
    
    chartRef.current = chart;

    console.log(data);

    chart.applyOptions({
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          width: 1,
          color: "#48494b",
          style: LineStyle.Dashed,
          labelBackgroundColor: "#48494b",
        },
        horzLine: {
          width: 1,
          color: "#48494b",
          style: LineStyle.Dashed,
          labelBackgroundColor: "#48494b",
        },
        
      },
    });

    const handleResize = (entries: ResizeObserverEntry[]) => {
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(chartContainer);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize as unknown as EventListener
      );
      resizeObserver.disconnect();
      chartRef.current?.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    gridLines,
  ]);

 


  // TODO - Lazy loading the charts
  return <div ref={chartContainerRef} style={{ height: "100%" }} />;
};

export default MainChart;

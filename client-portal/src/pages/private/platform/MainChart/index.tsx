import {
  createChart,
  ColorType,
  IChartApi,
  LineStyle,
  LastPriceAnimationMode,
  CrosshairMode,
  UTCTimestamp,
} from "lightweight-charts";
import React, { forwardRef, useEffect, useRef, useState } from "react";
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
import CountDown from "components/countDown/CountDown";
import { setAmount, SetDuration, setFinished, setTrade } from "@store/slices/trade";



const MainChart: React.FunctionComponent<any>  = forwardRef(({ data: newData,colors, type, chartScale }) => {
  // rename data being passed down to new data so it wont confilict real data thats coming from the socket 
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const chartRef = useRef<IChartApi>();
  // const {chartContainerRef, chartRef} = refs;
  const [cookies] = useCookies(["access_token"]);


  const { mutate: marketDataMutation, data: market } = useMarketData({});
  const { mutate: assetsListMutate } = useMarketAssets({});
  const { mutate: getClockMutate, data: clockData } = useGetClock({});

  const markets = useAppSelector((state) => state.markets);
  const { wsTicket } = useAppSelector((state) => state.user);
  const { trade, finished, duration, amount } = useAppSelector((state) => state.trades);
  const userState = useAppSelector((state) => state);

  const {themeSelect} = useAppSelector(state => state.themeBg)

  const dispatch = useAppDispatch();
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



  useEffect(()=>{
    console.log('object');
    console.log(trade);
    console.log(finished);
    if(finished){

      console.log(trade);
      console.log('here');

    
    }
    
  },[finished])

  // Chart logic
  useEffect(() => {
    const chartContainer = chartContainerRef.current!;
    const chart = createChart(chartContainer, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      grid: {
        vertLines: {
          color: themeSelect == "night" ? "#16171a" : "#b9b9b9",
          visible: true,
        },
        horzLines: {
          color: themeSelect == "night" ? "#16171a" : "#b9b9b9",
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

      const textElement1 = createCustomMarker1('1.21')
      if(finished){
        const oldTextElement1 = document.getElementById('textElement1');
        if (oldTextElement1) {
          oldTextElement1.remove();
          console.log('removed');
        }
        chartContainer.appendChild(textElement1);

      }

      const updatePosition1 = () => {
        const priceCoordinate = candlestickSeries.priceToCoordinate(64863.81000000);
        let timeCoordinate = chart.timeScale().timeToCoordinate(1721284620000 / 1000 as UTCTimestamp);
        
        // console.log('Price coordinate:', priceCoordinate);
      // console.log('Time coordinate:', timeCoordinate);
      if (timeCoordinate === null) {

        // If the specified time is not found use the first visible time
        const visibleRange = chart.timeScale().getVisibleRange();
        if (visibleRange) {
          timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
        }
      }
      
      if (priceCoordinate && timeCoordinate) {
        textElement1.style.top = `${(priceCoordinate - textElement1.offsetHeight  / 2) + 0}px`;
        textElement1.style.left = `${timeCoordinate + 0}px`;
        // console.log('Text position updated');
      }else{
        // console.log('failed to get coordinates');
      }
    };
    console.log('runned');
    console.log(finished);
    if(!finished){
    console.log('runned');
    const oldTextElement1 = document.getElementById('textElement1');
    if (oldTextElement1) {
      oldTextElement1.remove();
      console.log('removed');
    }
  
    chartContainer.appendChild(textElement1);
    console.log(trade);
    console.log('here');


    // Initial call to ensure chart is ready


    
  }
  const ensureChartReady = () => {
    setTimeout(() => {
     
      chart.subscribeCrosshairMove(updatePosition1);
      updatePosition1();
     


    }, 100);  // Short delay to ensure chart is rendered
  };
  ensureChartReady();

    // Custom markers with inline css append to chartContainer
    if(finished && trade !== null){
      console.log(finished,trade,duration,amount);
      
      // Pass parameters down or up and value 
      
  
     
        // pass parameters down or up and value
        const textElement2 = createCustomMarker2(amount.toString(), trade)
        chartContainer.appendChild(textElement2);
        
        // pass parameters down or up and value
        const textElement3 = createCustomMarker3(amount, trade)
        chartContainer.appendChild(textElement3);

          // Position text element
      
        const updatePosition2 = () => {
          const priceCoordinate = candlestickSeries.priceToCoordinate(64446.00000000);
    
         
    
          let timeCoordinate = chart.timeScale().timeToCoordinate(1721280300000 / 1000 as UTCTimestamp);
    
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
            textElement2.style.top = `${(priceCoordinate - textElement2.offsetHeight / 2) + 0 }px`;
            textElement2.style.left = `${timeCoordinate + 0}px`;
            console.log('Text position updated');
          }else{
            console.log('failed to get coordinates');
          }
        };
    
        const updatePosition3 = () => {
          const priceCoordinate = candlestickSeries.priceToCoordinate(64446.00000000);
    
    
          let timeCoordinate = chart.timeScale().timeToCoordinate(1721280300000 / 1000 as UTCTimestamp);
          if (timeCoordinate === null) {
            // If the specified time is not found use the first visible time
            const visibleRange = chart.timeScale().getVisibleRange();
            if (visibleRange) {
              timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
            }
          }
    
          if (priceCoordinate && timeCoordinate) {
            textElement3.style.top = `${(priceCoordinate - textElement3.offsetHeight / 2) - 30 }px`;
            textElement3.style.left = `${timeCoordinate + 45}px`;
            console.log('Text position updated');
          }else{
            console.log('failed to get coordinates');
          }
        };
   

        const ensureChartReady = () => {
          setTimeout(() => {
           
            chart.subscribeCrosshairMove(updatePosition2);
            updatePosition2();
    
            updatePosition3();
            chart.subscribeCrosshairMove(updatePosition3);
 

          }, 100);  // Short delay to ensure chart is rendered
        };
        console.log(trade);
        console.log('here');
  
  
        // Initial call to ensure chart is ready

        

          ensureChartReady();
        }
    

   
   
    


    candlestickSeries.setData(newData);
    
    chartRef.current = chart;

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

    if(finished){
    setTimeout(() => {

        dispatch(setTrade(null))
        dispatch(setFinished(false))
        dispatch(SetDuration(1))
        dispatch(setAmount(1))
        
      const oldTextElement2 = document.getElementById('textElement2');
      const oldTextElement3 = document.getElementById('textElement3');
    if (oldTextElement2 && oldTextElement3) {
      oldTextElement2.remove();
      oldTextElement3.remove();
      console.log('removed');
    }
      }, 6000);
    }

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
    finished,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    gridLines,
  ]);
  // ** Chart logic ends

  useEffect(() => {
    //  @ts-ignore
    chartRef.current.timeScale().applyOptions({
        barSpacing: chartScale
    });
  }, [chartScale]);



  // TODO - Lazy loading the charts
  return  <div style={{ position: 'relative', height: '100%' }}>
      <div ref={chartContainerRef} style={{ height: '100%' }} />
      <div style={{
        position: 'absolute',
        bottom: '60px',
        left: '49%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        padding: '5px 10px',
        borderRadius: '5px',
        fontSize: '14px',
        pointerEvents: 'none' // This ensures the text doesn't interfere with chart interaction
      }}>
      {
        trade !== null  && 
        <CountDown time={duration}/>
      }
      </div>
    </div>
  
  
    
    
});

export default MainChart;

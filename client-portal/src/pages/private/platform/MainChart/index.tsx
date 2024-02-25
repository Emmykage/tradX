import {
  createChart,
  ColorType,
  IChartApi,
  Time,
  LineStyle,
  UTCTimestamp,
  LastPriceAnimationMode,
  CrosshairMode,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import { useCookies } from "react-cookie";

import useSocketConnect from "../../../../socket/useSocketConnect";
import useMarketData from "api/marketData/useMarketData";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setCrypto, setInitialCrypto } from "@store/slices/markets";

// TODO - Move the types to types.ts file
export interface DataPoint {
  time: UTCTimestamp;
  value: number;
}


type MarketData = {
  symbol: string;
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  trade_count: number;
  vwap: number;
  time: UTCTimestamp;
  value: number;
};

interface MainChartProps {
  data: DataPoint[];
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
    gridLines?: string;
  };
}
// TODO - data props should be remove
const MainChart: React.FC<MainChartProps> = ({ data: prevData, colors }) => {
  const [cookies] = useCookies(["access_token"]);
  const { mutate: marketDataMutation, data: market } = useMarketData({});
  const { crypto } = useAppSelector((state) => state.markets);
  const dispatch = useAppDispatch();

  const { data: socketData } = useSocketConnect();

  const data: MarketData[] = crypto["BTC/USD"];
  // TODO - This use Effect should be delete and move the initial market data request in redux/toolkit thunks 
  useEffect(() => {
    marketDataMutation(cookies.access_token);
  }, []);

  // TODO - Should be implemented in the back-end and remove this from here
  useEffect(() => {
    // Check if market data is defined and not null
    if (market && typeof market === "object") {
      // Transform market data
      const transformedMarket = Object.keys(market).reduce((acc, key) => {
        acc[key] = market[key].map((item) => ({
          ...item,
          time: item.timestamp,
          value: item.open,
        }));
        return acc;
      }, {});
      console.log({ transformedMarket });
      dispatch(setInitialCrypto(transformedMarket));
    }
  }, [market]);

  // TODO - Make the update the crypto slice as a callback function in useSocketConnect custom hook
  useEffect(() => {
    dispatch(setCrypto(socketData));
  }, [socketData]);

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
        textColor: "#70808C",
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

    // const timeRangeInSeconds = 180; // 3 minutes
    // const endTime = data[data.length - 1].time;
    // const startTime = new Date(
    //   new Date(endTime).getTime() - timeRangeInSeconds * 1000
    // );

    const newSeries = chart.addAreaSeries({
      lineColor,
      lineWidth: 1,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
      priceLineColor: "#868788",
      priceLineStyle: LineStyle.Solid,
      priceLineWidth: 1,
      lastPriceAnimation: LastPriceAnimationMode.OnDataUpdate,
    });
    newSeries.setData(data);

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

    // const waitForChartInitialization = setTimeout(() => {
    //   chart.timeScale().setVisibleRange({
    //     from: startTime as unknown as Time,
    //     to: endTime as Time,
    //   });
    //   chart.timeScale().fitContent();
    //   // chart.timeScale().scrollToPosition(1, true);

    //   clearTimeout(waitForChartInitialization);
    // }, 100);

    // let updateCount = 0;

    // const updateIntervalId = setInterval(() => {
    //   const lastDataPoint = data[data.length - 1];
    //   const timeInterval = 1000; // 1 second
    //   const startValue = lastDataPoint.value;

    //   const newObject: DataPoint = {
    //     time: (lastDataPoint.time + updateCount + timeInterval) as UTCTimestamp,
    //     value: startValue * Math.random() * 2,
    //   };

    //   updateCount++;

    //   newSeries.update(newObject);
    // }, 5000);

    return () => {
      // clearInterval(updateIntervalId);
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

  // TODO - Render loader spinner
  return <div ref={chartContainerRef} style={{ height: "100%" }} />;
};

export default MainChart;

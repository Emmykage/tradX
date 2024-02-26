import {
  createChart,
  ColorType,
  IChartApi,
  LineStyle,
  LastPriceAnimationMode,
  CrosshairMode,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import { useCookies } from "react-cookie";

import useSocketConnect from "../../../../hooks/useSocketConnect";
import useMarketData from "api/marketData/useMarketData";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setCrypto, setInitialCrypto } from "@store/slices/markets";
import { MainChartProps, MarketData, TransformedMarket } from "./types";


const MainChart: React.FC<MainChartProps> = ({ colors }) => {
  const [cookies] = useCookies(["access_token"]);
  const { mutate: marketDataMutation, data: market } = useMarketData({});
  const markets = useAppSelector((state) => state.markets);
  const dispatch = useAppDispatch();

  const { data: socketData } = useSocketConnect(
    "wss://tradx.io/ws/external-api/"
  );

  const data: MarketData[] = markets.crypto[markets.sympol];
  useEffect(() => {
    marketDataMutation(cookies.access_token);
  }, []);

  useEffect(() => {
    if (market && typeof market === "object") {
      const transformedMarket: TransformedMarket = {};
      Object.keys(market).forEach((key) => {
        transformedMarket[key] = market[key].map((item: MarketData) => ({
          ...item,
          time: item.timestamp,
          value: item.open,
        }));
      });
      
      dispatch(setInitialCrypto(transformedMarket));
    }
  }, [market]);

  useEffect(() => {
    if (markets.crypto[markets.sympol].length > 0) {
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

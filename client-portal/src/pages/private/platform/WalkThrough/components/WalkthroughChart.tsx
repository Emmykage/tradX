import {
  createChart,
  ColorType,
  IChartApi,
  Time,
  LineStyle,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export interface DataPoint {
  time: string;
  value: number;
}

interface ChartComponentProps {
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

const ChartComponent: React.FC<ChartComponentProps> = ({ data, colors }) => {
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
      },
      width: chartContainer.clientWidth,
      height: 300,
    });

    const timeRangeInSeconds = 180; // 3 minutes
    const endTime = data[data.length - 1].time;
    const startTime = new Date(
      new Date(endTime).getTime() - timeRangeInSeconds * 1000
    );

    const newSeries = chart.addAreaSeries({
      lineColor,
      lineWidth: 1,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
      priceLineColor: "#868788",
      priceLineStyle: LineStyle.Solid,
      priceLineWidth: 1,
    });
    newSeries.setData(data);

    chartRef.current = chart;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(chartContainer);

    const waitForChartInitialization = setTimeout(() => {
      chart.timeScale().setVisibleRange({
        from: startTime as unknown as Time,
        to: endTime as Time,
      });
      chart.timeScale().fitContent();

      clearTimeout(waitForChartInitialization);
    }, 100);

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

  return <div ref={chartContainerRef} style={{ height: "100%" }} />;
};

export default ChartComponent;

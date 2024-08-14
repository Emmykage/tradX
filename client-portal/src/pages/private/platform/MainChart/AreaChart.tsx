import React, { useEffect, useRef } from "react";
import { ColorType, createChart,  CrosshairMode,  PriceScaleMode, UTCTimestamp } from "lightweight-charts";
import { createCustomMarker1, createCustomMarker2, createCustomMarker3 } from "./Markers";

export const AreaChart = ({chartData }: any) => {

    const resizeObserver: any = useRef();
    const chartContainerRef: any = useRef(null);
    const chartRef: any = useRef();

    useEffect(() => {
      const chartContainer = chartContainerRef.current!;
      const chart = createChart(chartContainer, {
          // width: window.innerWidth ,
          height: window.innerHeight  - 120,
          rightPriceScale: {
            scaleMargins: {
              top: 0.3,
              bottom: 0.25
            },
            mode: PriceScaleMode.Logarithmic
          },
          layout: {
            background: { type: ColorType.Solid, color: 'transparent' },
            textColor: "#70808C"
          },
          handleScroll: {
            mouseWheel: false,
            pressedMouseMove: false,
            horzTouchDrag: false,
            vertTouchDrag: false
          },
          handleScale: {
              axisPressedMouseMove: false,
              mouseWheel: false,
              pinch: false,
          },
          grid: {
            vertLines: {
              color: "rgba(42, 46, 57, 0)"
            },
            horzLines: {
              color: "rgba(42, 46, 57, 0.6)"
            }
          },
          crosshair: {
            mode: CrosshairMode.Hidden,
          },
          timeScale: {
              borderVisible: false,
              timeVisible: true,
              secondsVisible: false,
              rightOffset: 30,
              allowShiftVisibleRangeOnWhitespaceReplacement: true,
            },
      });

      let areaSeries = chart.addAreaSeries({
          topColor: "#0c2c3b",
          bottomColor: 'transparent',
          lineColor: "#1973FA",
          lineWidth: 1
      });

      
      areaSeries.setData(chartData);

      chart.timeScale().applyOptions({
          barSpacing: 10,
      });
      const textElement1 = createCustomMarker1(`${chartData[chartData.length - 1].value}`)

      const updatePosition1 = () => {
        const priceCoordinate = areaSeries.priceToCoordinate(chartData[chartData.length - 1].value);
        const lineWidthChild = textElement1.querySelector('.line-width');
        let timeCoordinate = chart.timeScale().timeToCoordinate(chartData[chartData.length - 1].time  as UTCTimestamp);
      if (timeCoordinate === null) {
        const visibleRange = chart.timeScale().getVisibleRange();
        if (visibleRange) {
          timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
        }
      }

      if (priceCoordinate && timeCoordinate) {
          textElement1.style.top = `${(priceCoordinate - textElement1.offsetHeight  / 2) + 0}px`;
          textElement1.style.left = `${timeCoordinate + 0}px`;
          let getDistance = window.innerWidth - timeCoordinate;
          // @ts-ignore
          lineWidthChild.style.width = `${getDistance - 60}px`; 

      }
    };
    
    chartContainer.appendChild(textElement1);
  
    const ensureChartReady = () => {
      setTimeout(() => {
        chart.subscribeCrosshairMove(updatePosition1);
        updatePosition1();
      
      }, 100);  // Short delay to ensure chart is rendered
    };
    ensureChartReady();

   
  },[]);

  return(
    <div style={{ position: 'relative', height: '90%' }}>
      <div ref={chartContainerRef}  id="container" style={{ height: '100%' }} />
    </div>
  )
};
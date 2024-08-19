import React, { useEffect, useRef } from "react";
import { ColorType, createChart,  CrosshairMode,  PriceScaleMode, UTCTimestamp } from "lightweight-charts";
import { createCustomMarker1, createCustomMarker2, createCustomMarker3 } from "./Markers";
import { additionalDataArray, tradeDownData, tradeUpData } from "./areaData";

export const AreaChart = ({chartData, liveLoading = false, bidOngoing=false, time = 40, tradeType="up" }: any) => {

    const resizeObserver: any = useRef();
    const chartContainerRef: any = useRef(null);
    const seriesRef: any = useRef();

    useEffect(() => {
      const chartContainer = chartContainerRef.current!;
      const chart = createChart(chartContainer, {
          // width: window.innerWidth ,
          height: window.innerHeight,
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
      seriesRef.current = areaSeries;
      areaSeries.setData(chartData);
   
      chart.timeScale().applyOptions({
          barSpacing: 6,
      });
        const lastData = chartData[chartData.length - 1];

        const textElement1 =  createCustomMarker1(`${chartData[chartData.length - 1].value}`);
        const textElement2 = createCustomMarker2(`${chartData[chartData.length - 1].value}`, tradeType);

        const updatePosition1 = (data: null) => {
            const currentData = data? data :  chartData[chartData.length - 1];
            const priceCoordinate = areaSeries.priceToCoordinate(currentData.value);
            const lastPriceCoordinate = areaSeries.priceToCoordinate(lastData.value);
            const lineWidthChild = textElement1.querySelector('.line-width');
            const getText = document.getElementById('price-text');
            let timeCoordinate = chart.timeScale().timeToCoordinate(currentData.time  as UTCTimestamp);
            if (timeCoordinate === null) {
              const visibleRange = chart.timeScale().getVisibleRange();
              if (visibleRange) {
                timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
              }
            }

            if (priceCoordinate && timeCoordinate) {
                textElement1.style.top = `${(priceCoordinate - textElement1.offsetHeight  / 2) + 0}px`;
                // @ts-ignore
                textElement2.style.top = `${(lastPriceCoordinate  - textElement2.offsetHeight  / 2) + 0}px`;
                textElement1.style.left = `${timeCoordinate + 0}px`;
                let containerWidth = document.getElementById("chart-container")?.clientWidth;
                // @ts-ignore
                let getDistance = containerWidth - timeCoordinate;
                // @ts-ignore
                lineWidthChild.style.width = `${getDistance - 65}px`; 
                // @ts-ignore
                getText.innerHTML = currentData?.value;

            }
        };
        
        const updatePosition2 = (data: null) => {
          const currentData = data? data :  chartData[chartData.length - 1];
          const priceCoordinate = areaSeries.priceToCoordinate(currentData.value);
          const lineWidthChild = textElement2.querySelector('.line-width');
          let timeCoordinate = chart.timeScale().timeToCoordinate(currentData.time  as UTCTimestamp);
          if (timeCoordinate === null) {
            const visibleRange = chart.timeScale().getVisibleRange();
            if (visibleRange) {
              timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
            }
          }

          if (priceCoordinate && timeCoordinate) {
              textElement2.style.top = `${(priceCoordinate - textElement1.offsetHeight  / 2) + 0}px`;
              textElement2.style.left = `${timeCoordinate + 0}px`;
              let containerWidth = document.getElementById("chart-container")?.clientWidth;
              // @ts-ignore
              let getDistance = containerWidth - timeCoordinate;
              // @ts-ignore
              lineWidthChild.style.width = `${getDistance - 65}px`; 

          }
      };
        chartContainer.appendChild(textElement1);
        console.log(bidOngoing);
        if(bidOngoing){
          chartContainer.appendChild(textElement2);
        }
      
        const ensureChartReady = () => {
          setTimeout(() => {
            chart.subscribeCrosshairMove(updatePosition1);
            updatePosition1();
            if(bidOngoing) updatePosition2();
            
          }, 100);  // Short delay to ensure chart is rendered
        };
        ensureChartReady();
  

      if(liveLoading || bidOngoing){
        const deletionObj = {20: 20, 30: 10, 40: 0 };
        let c = 1;
        if(time){
          // @ts-ignore
          additionalDataArray.splice(additionalDataArray.length - deletionObj[time], deletionObj[time]);
        };
        let selectedData = tradeType === "up"? [...additionalDataArray, ...tradeUpData] : [...additionalDataArray, ...tradeDownData];
        // Simulate real-time data update every second
        const interval = setInterval(() => {
          seriesRef.current.update(selectedData[c]);
          chart.subscribeCrosshairMove(updatePosition1);
          updatePosition1(selectedData[c]);
          c += 1;
          if(!selectedData[c]){
            clearInterval(interval);
          }
    
        }, 1000);
  
        return () => clearInterval(interval);
      }
   
  },[]);



  return(
    <div id="chart-container" style={{ position: 'relative', height: '100%' }}>
      
      <div ref={chartContainerRef}  id="container"  style={{ height: '100%' }} />
    </div>
  )
};
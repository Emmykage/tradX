import React, { useEffect, useRef } from "react";
import { ColorType, createChart,  PriceScaleMode } from "lightweight-charts";

export const AreaChart = ({chartData,  chartScale, selectedTimeScale }: any) => {

    const resizeObserver: any = useRef();
    const chartContainerRef: any = useRef(null);
    const chartRef: any = useRef();

    useEffect(() => {
        chartRef.current = createChart(chartContainerRef.current, {
            // width: window.innerWidth ,
            // height: window.innerHeight ,
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
            grid: {
              vertLines: {
                color: "rgba(42, 46, 57, 0)"
              },
              horzLines: {
                color: "rgba(42, 46, 57, 0.6)"
              }
            },
            timeScale: {
                borderVisible: false,
                timeVisible: true,
                secondsVisible: false,
                rightOffset: 30,
                allowShiftVisibleRangeOnWhitespaceReplacement: true,
              },
        });

        let areaSeries = chartRef.current.addAreaSeries({
            topColor: "#0c2c3b",
            bottomColor: 'transparent',
            lineColor: "#0095ff",
            lineWidth: 1
        });
        areaSeries.setData(chartData);

        // const myMarkers = [{ 
        //   time: chartData[chartData.length - 40].time, 
        //   position: 'aboveBar', 
        //   color: '#f68410', 
        //   shape: 'circle', 
        //   text: 'A'
        //  }, /* more series markers... */
        // ];
        
        
        // // ... some time later
        
        // // create another marker data point
        // const myNewMarker = {
        //   time: chartData[chartData.length - 20].time,
        //   position: 'onsBar',
        //   color: '#f68410',
        //   shape: 'circle',
        //   text: 'B'
        // };
        
        // // Create a new array with the existing markers and the new marker
        // // and use it within setMarkers
        // areaSeries.setMarkers([...myMarkers, myNewMarker]);
    }, 
    []);

    // useEffect(() => {
    //     resizeObserver.current = new ResizeObserver(entries => {
    //       const { width, height } = entries[0].contentRect;
    //       chart.current.applyOptions({ width, height });
    //       setTimeout(() => {
    //         chart.current.timeScale().fitContent();
    //       }, 0);
    //     });
    
    //     resizeObserver.current.observe(chartContainerRef.current);
    
    //     return () => resizeObserver.current.disconnect();
    //   }, []);

    // useEffect(() => {
    //     chartRef.current.timeScale().applyOptions({
    //         barSpacing: chartScale,
            
    //     });
          
    // }, [chartScale]);

    // useEffect(() => {
    //     let time = new Date();
    //     const to = new Date();
    //     time.setSeconds(time.getSeconds() - selectedTimeScale?.number);
    //     // chartRef.current.timeScale().setVisibleRange({
    //     //     from: +time,
    //     //     to: +to
    //     // });
    //     chartRef.current.timeScale().resetTimeScale({
    //         from: +time,
    //         to: +to
    //     })
          
    // }, [selectedTimeScale]);
 

    return(
        <div style={{ position: 'relative', height: '100%' }}>
            <div ref={chartContainerRef}  style={{ height: '100%' }} />
        </div>
    )
};
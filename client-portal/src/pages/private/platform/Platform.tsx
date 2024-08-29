import { useCallback, useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import TradeForm from "../../../components/tradeForm/TradeForm";
import "./platform.scss";
import { Button, Drawer, Modal } from "antd";
import { AreaChartIcon, ArrowLeftOS, BarChartIcon, CandleStickIcon, CloseIcon, MainChartAnalysisIcon, MainChartChangeIcon, MainChartSignalsIcon, ZoomInChartIcon, ZoomOutChartIcon } from "../../../assets/icons";

import useQueryParamHandler from "./hooks/useQueryParamHandler";
import {
  leftDarwerTitleHandler,
  leftDrawerBodyHandler,
  leftSubDrawerBodyHandler,
  leftSubDrawerTitleHandler,
  rightDrawerBodyHandler,
  rightDrawerTitleHandler,
  rightSubDrawerBodyHandler,
  rightSubDrawerExtraHandler,
  rightSubDrawerTitleHandler,
} from "./utils";

import {
  CurrentDrawerType,
  LeftSubDrawer,
  RightDrawerContent,
  RightSubDrawerContent,
} from "./types";
import MainChart from "./MainChart";
import { initialData } from "./MainChart/data";
import { initialCandleData } from "./MainChart/candleData";
import { setAppearanceBackground } from "../../lib/utils";
import { useAppSelector } from "@store/hooks";
import { setWSTicket, UserSliceState } from "@store/slices/user";
import { AreaChart } from "./MainChart/AreaChart";
import {  isArrayEmpty, isObjectEmpty, timeScaleMenu } from "utils/utils";
import DropdownMenu from "components/dropdownMenu/DropdownMenu";
// import BarChart from "./MainChart/BarChart";
import { useNavigate } from "react-router-dom";
import { ColorType, createChart, CrosshairMode, IChartApi, LineStyle, Time, UTCTimestamp } from "lightweight-charts";
import useSocketConnect from "hooks/useSocketConnect";
import { createCustomMarker1, createCustomMarker2, FinishedTradeMarker } from "./MainChart/Markers";
import { setForexData, TradeStates } from "@store/slices/trade";
import Loading from "components/loading";
import useTradeList from "api/wallet/useTradeList";
import { setAssetPairs, setSelectedAssetPair } from "@store/slices/pairs";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import useWebSocketTicket from "api/user/useWebSocketTicket";
import CustomModal from "components/customModal/CustomModal";
import PortfolioModal from "pages/private/platform/platformMenus/portfolioModal/PortfolioModal";

interface PlatformProps {}

const Platform: React.FunctionComponent<PlatformProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isLeftSubDrawerOpen, setIsLeftSubDrawerOpen] =
    useState<boolean>(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState<boolean>(false);
  const [rightDrawerContent, setIsRightDrawerContent] =
    useState<RightDrawerContent>(null);
  const [isRightSubDrawerOpen, setIsRightSubDrawerOpen] =
    useState<boolean>(false);
  const [rightSubDrawerContent, setIsRightSubDrawerContent] =
    useState<RightSubDrawerContent>(null);
  const [currentDrawer, setCurrentDrawer] = useState<CurrentDrawerType>(null);
  const [leftSubDrawer, setLeftSubDrawer] = useState<LeftSubDrawer>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [tradeFormHeight, setTradeFormHeight] = useState(0);
  const [mainSidebarWidth, setMainSidebarWidth] = useState(0);
  const [bottomSidebarHeight, setBottomSidebarHeight] = useState(0);
  const [chartInitialData, setChartInitialData] = useState<any>([]);
  // Area and bar data

  const [chartScale, setChartScale] = useState(6);
  const [selectedChart, setSelectedChart] = useState('area');
  const [selectedTimeScale, setSelectedTimeScale] = useState<any>(timeScaleMenu[8]);
  const storedScale = localStorage.getItem("scale");
  const { wsTicket } = useAppSelector((state) => state.user);
  const [cookies] = useCookies(["access_token"]);

  // Chart refs and constants
  let chartContainerRef = useRef<HTMLDivElement>(null);
  let chartRef = useRef<IChartApi>();
  let seriesRef = useRef(null);
  let chart = undefined
  let chartContainer = null
  let candlestickSeries = null;

  const dispatch = useDispatch()
  const { mutate, isPending } = useTradeList({
    onSuccess: (data:any) => {
      // dispatch(setWallets(updatedWallets))
     dispatch(setForexData(data.results))
     dispatch(setAssetPairs(data.results[0]))
     dispatch(setSelectedAssetPair(data.results[0]));
    },
    onError: (error) => {
      console.log("fetching wallets error", error);
    },
  })

  useEffect(()=>{
    
    mutate({
      token: cookies.access_token,
    });
  },[])

  

  
  const {tradeTransaction,duration, trade,tradeData,tradeResult } = useAppSelector(
    (state: { trades: TradeStates }) => state.trades
  );
    // GET the web-socket ticket for validation after the app running
    const { mutate: webSocketTicketMutate } = useWebSocketTicket({
      onSuccess: (data) => {
        if (data?.ws_ticket) {
          dispatch(setWSTicket(data?.ws_ticket));
        }
      },
    });
  
    useEffect(() => {
      // Get the Web Socket Ticket Key
      if (cookies.access_token) {
        webSocketTicketMutate(cookies.access_token);
      }
    }, [cookies.access_token]);
    
  const { data: socketData,oldData, socket } = useSocketConnect(wsTicket as string);

  const colors = {
    backgroundColor: "transparent",
    lineColor: "#0094FF",
    textColor: "#70808C",
    areaTopColor: "rgba(11, 166, 238, 0.2)",
    areaBottomColor: "rgba(11, 166, 238, 0)",
    gridLines: "#ffccff"
  };

  const {themeSelect} = useAppSelector(state => state.themeBg)
  useQueryParamHandler({
    setIsRightDrawerOpen,
    setIsRightDrawerContent,
    setIsRightSubDrawerOpen,
    setIsRightSubDrawerContent,
  });

  const { user, loading } = useAppSelector(
    (state: { user: UserSliceState }) => state.user
  );

  // candle series chart data formatting 

  const newCandleData= initialCandleData.map((d:any, _i: number)=>{
    var t = new Date();
    t.setSeconds(t.getSeconds() + _i);
    // return {time: d[0]/1000, open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
    return {time: Date.parse(t), open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
  })




  const isWalkthroughSkipped = user?.is_walkthrough ?? true;


 

  // Chart logic
  useEffect(() => {
    if (!chartContainerRef.current) return;

     chartContainer = chartContainerRef.current!;

     chart = createChart(chartContainer, {
      layout: {
        background: { type: ColorType.Solid, color: colors?.backgroundColor },
        // 'white',
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
        rightOffset: 70,
        allowShiftVisibleRangeOnWhitespaceReplacement: true,
      },
      width: chartContainer?.clientWidth,
      height: 300,
    });

    const initialCandleData = [
      { time: 1628164800, open: 30, high: 35, low: 25, close: 32 },
      { time: 1628251200, open: 32, high: 38, low: 31, close: 36 },
      // more data...
    ];
    //  candle series 
    const series = selectedChart === 'candlesticks' 
    ? chart.addCandlestickSeries({
        upColor: 'green',
        downColor: 'red',
        borderDownColor: 'red',
        borderUpColor: 'green',
        wickDownColor: 'red',
        wickUpColor: 'green',
      })
    : selectedChart === 'area'? chart.addAreaSeries({
      topColor: "#0c2c3b",
      bottomColor: 'transparent',
      lineColor: "#1973FA",
      lineWidth: 2
      }) :chart.addBarSeries({
        upColor: 'green',
        downColor: 'red'
      })

  chartRef.current = chart;
  seriesRef.current = series;
 

    // @ts-ignore

    if(oldData){
      const removeDuplicates = (data: any[]) => {
        const seen = new Set<number>();
        return data.filter(item => {
          if (!seen.has(item.time)) {
            seen.add(item.time);
            return true;
          }
          return false;
        });
      };
      // console.log(oldData);
      const sortedAndUniqueData = removeDuplicates(oldData.sort((a, b) => a.time - b.time));
      
        // Reformat data if the selected chart type is 'AreaSeries'
  if (selectedChart === 'area') {
    const reformattedData = sortedAndUniqueData.map(item => ({
      time: item.time,     // Keep the time as is
      value: item.close,   // Use 'close' as the 'value' for AreaSeries
    }));

    // Set the reformatted data for AreaSeries
    series.setData(reformattedData);
  } else {
    // For other chart types, use the sorted and unique data as is
    series.setData(sortedAndUniqueData);
  }
    }

    
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
 
  }, [selectedChart,oldData]);
  useEffect(() => {
    if (!chartRef.current || !seriesRef.current || !socketData?.barchart) return;
  
    const chart = chartRef.current;
    const series = seriesRef.current;
  
    const createOrUpdateMarker = () => {
      let marker = document.getElementById('textElement1');
      if (!marker) {
        marker = createCustomMarker1(socketData.barchart?.open);
        marker.id = 'textElement1';
        chartContainerRef.current?.appendChild(marker);
      }
  
  
      const updateMarkerPosition = () => {
        if (!marker) return;


        // Update the marker content with the latest value
        const newValue = socketData.barchart?.open;
        const priceTextElement = marker.querySelector('#price-text'); // Select the nested span
    
        if (priceTextElement && newValue !== undefined) {
          priceTextElement.textContent = newValue.toString(); // Update the nested span's text content
        }
  
        
        const priceCoordinate = series.priceToCoordinate(socketData?.barchart?.close);
        
        let timeCoordinate = chart.timeScale().timeToCoordinate(socketData?.barchart?.timestamp);
        
      // if (timeCoordinate === null) {

      //   // If the specified time is not found use the first visible time
      //   const visibleRange = chart.timeScale().getVisibleRange();
      //   if (visibleRange) {
      //     timeCoordinate = chart.timeScale().timeToCoordinate(visibleRange.from);
      //   }
      // }
      
      if (priceCoordinate && timeCoordinate) {
        marker.style.top = `${(priceCoordinate - marker.offsetHeight  / 2) + 0}px`;
        marker.style.left = `${timeCoordinate + 0}px`;
      }else{
        // console.log('failed to get coordinates');
      }
    }
  
    requestAnimationFrame(updateMarkerPosition);
      chart.subscribeCrosshairMove(updateMarkerPosition);
    };
    createOrUpdateMarker();
  
  
    // Update chart data
    if(selectedChart === 'area'){
      series.update({
        value: socketData.barchart.close,
        time: socketData.barchart.time
      });

    }else{
      series.update(socketData.barchart);

    }
  
    return () => {
      chart.unsubscribeCrosshairMove(createOrUpdateMarker);
    };
  }, [socketData?.barchart]);

  // second custom chart 
  useEffect(() => {
    if (!chartRef.current || !seriesRef.current || !socketData?.barchart) return;
  
    const chart = chartRef.current;
    const series = seriesRef.current;
  
    const createOrUpdateMarker = () => {
      let marker = document.getElementById('textElement2');
      if (!marker) {
        
        
        const formatedPricePerUnit = tradeTransaction?.price_per_unit.replace(/00$/, "");

        marker = createCustomMarker2(formatedPricePerUnit,trade);
        marker.id = 'textElement2';
        chartContainerRef.current?.appendChild(marker);
        
      }else{
        marker = createCustomMarker2(tradeTransaction?.price_per_unit,trade);
        marker.id = 'textElement2';
        chartContainerRef.current?.appendChild(marker);
      }
  
  
      const updateMarkerPosition = () => {
        if (!marker) return;


        // Update the marker content with the latest value
        // const newValue = socketData.barchart?.open;
        // const priceTextElement = marker.querySelector('#price-text'); // Select the nested span
    
        // if (priceTextElement && newValue !== undefined) {
        //   priceTextElement.textContent = newValue.toString(); // Update the nested span's text content
        // }
  
        
        const tradePrice = (parseInt(socketData.barchart?.open) + parseInt(socketData?.barchart?.close))/2
        const priceCoordinate = series.priceToCoordinate(tradePrice);
        const newTime = new Date(tradeTransaction?.created_at).getTime()
        let timeCoordinate = chart.timeScale().timeToCoordinate(newTime);
        
    
      
      if (priceCoordinate && timeCoordinate) {
        marker.style.top = `${(priceCoordinate - marker.offsetHeight  / 2) + 0}px`;
        marker.style.left = `${timeCoordinate - 5}px`;
        // console.log('Text position updated');
      }else{
        // console.log('failed to get coordinates');
      }
      requestAnimationFrame(updateMarkerPosition);

      setTimeout(() => {
      marker.remove()
      }, duration * 1000);
    }
  
    updateMarkerPosition()
    };
    requestAnimationFrame(createOrUpdateMarker);

    
  
  
    // Update chart data
    if(selectedChart === 'area'){
    series.update({
      value: socketData.barchart.close,
      time: socketData.barchart.time
    });

  }else{
    series.update(socketData.barchart);

  }
  
    return () => {
      chart.unsubscribeCrosshairMove(createOrUpdateMarker);
    };
  }, [tradeTransaction]);

  // finished trade custom indiciator

  useEffect(() => {
    if (!chartRef.current || !seriesRef.current || !socketData?.barchart) return;
   let displayed = false
    const chart = chartRef.current;
    const series = seriesRef.current;
    const createOrUpdateMarker = () => {
      let marker = document.getElementById('textElement4');
      if (!marker) {
        marker = FinishedTradeMarker(parseInt(tradeResult[0]?.price_per_unit),tradeResult[0]?.net.startsWith('-') ? 'lose' : 'won');

        marker.id = 'textElement4';
        chartContainerRef.current?.appendChild(marker);
      }else{
        marker = FinishedTradeMarker(parseInt(tradeResult[0]?.price_per_unit),'won');
        marker.id = 'textElement4';
        chartContainerRef.current?.appendChild(marker);

      }
  
  
      const updateMarkerPosition = () => {
        if (!marker) return;
        const tradeResultPrice = (parseFloat(tradeTransaction?.close) + parseFloat(tradeTransaction?.open))/2

        const priceCoordinate = series.priceToCoordinate(socketData.barchart?.open);
        // console.log(tradeResult[0].created_at);
        // console.log(tradeData.timestamp + 60 * 10000);
        const resultTime = new Date(tradeResult[0]?.result_time).getTime()

        let timeCoordinate = chart.timeScale().timeToCoordinate(resultTime as UTCTimestamp );
        
        
      
      if (priceCoordinate && timeCoordinate) {
        marker.style.top = `${(priceCoordinate - marker.offsetHeight  / 2) + 0}px`;
        marker.style.left = `${timeCoordinate - 85}px`;
        // console.log('Text position updated');
      }else{
        // console.log('failed to get coordinates');
      }
      requestAnimationFrame(updateMarkerPosition);

      setTimeout(() => {
      marker.remove()
      }, 6000);
    }
  
    updateMarkerPosition()
    };
    requestAnimationFrame(createOrUpdateMarker);
    
    // Update chart data
    if(selectedChart === 'area'){
      series.update({
        value: socketData?.barchart?.close,
        time: socketData?.barchart?.time
      });

    }else{
      series.update(socketData?.barchart);

    }
  
    return () => {
      chart.unsubscribeCrosshairMove(createOrUpdateMarker);
    };
  }, [tradeResult]);

 
  useEffect(() => {
        // @ts-ignore
    if(!isObjectEmpty(socketData?.barchart)){
      // @ts-ignore
      if(selectedChart === 'area'){
        seriesRef.current?.update({
          value: socketData?.barchart?.close,
          time: socketData?.barchart?.time
        });
  
      }else{
        seriesRef.current?.update(socketData?.barchart);
  
      }
    

    };
    
  }, [socketData,initialData]);

  useEffect(() => {
    const topbarElement = document.getElementById("topbarContainer");
    const tradeFormElement = document.getElementById("tradeForm");
    const mainSidebarElement = document.getElementById("main_sidebar");
    const bottomSidebarElement = document.getElementById("bottom_sidebar");

    if (topbarElement) {
      setTopbarHeight(topbarElement.clientHeight);
    }

    if (tradeFormElement && window.innerWidth <= 767) {
      setTradeFormHeight(tradeFormElement.clientHeight);
    }

    if (bottomSidebarElement && window.innerWidth <= 767) {
      setBottomSidebarHeight(bottomSidebarElement.clientHeight);
    }

    if (mainSidebarElement) {
      setMainSidebarWidth(mainSidebarElement.clientWidth);
    } else {
      setMainSidebarWidth(0);
    }
  }, [window.innerWidth, storedScale]);

  const calculateTradeContentHeight = () => {
    const totalHeight =
      topbarHeight +
      (window.innerWidth <= 767 ? tradeFormHeight : 0) +
      (window.innerWidth <= 767 ? bottomSidebarHeight : 0);
    return `calc(100% - ${totalHeight}px)`;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedImageId = localStorage.getItem("selectedBackgroundImage");
    if (storedImageId) {
      setAppearanceBackground(storedImageId);
    }
  }, []);

  const MainSidebar = ({ id }: { id?: string }) => {
    return (
      <Sidebar
        onlineTraders ={socketData?.onlinetraders?.count}
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        setIsLeftSubDrawerOpen={setIsLeftSubDrawerOpen}
        isLeftSubDrawerOpen={isLeftSubDrawerOpen}
        currentDrawer={currentDrawer}
        setCurrentDrawer={setCurrentDrawer}
        id={id ? id : ""}
      />
    );
  };
  // Chart zoom logic

  const handleZoomChartScale = (increase = true) => {
    if(increase){
      setChartScale(chartScale + 1);
    }else{
      setChartScale(chartScale > 1? chartScale - 1 : chartScale);
    }
  };

  const removeAllIndicators = ()=>{
    const marker1 = document.getElementById('textElement2');
    const marker2 = document.getElementById('textElement4');

    marker1?.remove()
    marker2?.remove()

  }
  const handleChartSelectionClick = (type = "candlesticks") => {
    setSelectedChart(type);
    removeAllIndicators()
  };

  
  const renderSelectedChartType = () => {
    if (!oldData) {
      return (
        <Loading/>
      );
    }

    switch (selectedChart) {
      // Case for other charts can go here if needed
      
      default:
        return (
          <> 
            <MainChart 
              data={oldData} 
              selectedTimeScale={selectedTimeScale}  
              refs={{ chartContainerRef, chartRef, seriesRef }}  
              chartScale={chartScale}  
            />
          </>
        );
    }
  };
  
  const selectTimeScale = (timeScaleSelection = timeScaleMenu[0]) => {
    setSelectedTimeScale(timeScaleSelection);
  };

  const renderTimeScaleOptions = () => (
    <div className="grid-container"> 
      {timeScaleMenu.map((datum:any, _i:number) => (
        <button className="selected" onClick={()=> selectTimeScale(datum)}>{datum?.text}</button>
      ))}
    </div>
  );

  const chartOptionMenus = [
    {
      onClick: undefined,
      icon: <MainChartChangeIcon />,
      tooltipText: 'Chart types',
      type: 'drop-down',
      position: 'right',
      menus: [
        {
          text: 'Area Chart',
          onclick: () => handleChartSelectionClick('area'),
          icon: <AreaChartIcon />
        },
        {
          text: 'Candlesticks',
          onclick: () => handleChartSelectionClick('candlesticks'),
          icon: <CandleStickIcon />
        },
        {
          text: 'Bars',
          onclick: () => handleChartSelectionClick('bar'),
          icon: <BarChartIcon />
        }
        
    ]
    },
    {
      onClick: undefined,
      icon: <MainChartAnalysisIcon />,
      tooltipText: 'Technical Analysis'
    },
    {
      onClick: undefined,
      icon: <MainChartSignalsIcon />,
      tooltipText: 'Signals'
    },
  ];

  return (
    <div className="platformWrapper"  data-theme={themeSelect}>
    {/* <CustomModal/> */}
      {windowWidth >= 768 ? (
        <MainSidebar id="main_sidebar" />
      ) : (
        <MainSidebar id="bottom_sidebar" />
      )}
       <Drawer
        title={leftDarwerTitleHandler(currentDrawer)}
        placement="left"
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        open={isDrawerOpen}
        className={`${themeSelect} ml-106 leftMainDrawer`}
        style={{ marginLeft: `${mainSidebarWidth}px`}}    
        closeIcon={<CloseIcon />}
        mask={false}
        width={
          windowWidth <= 768 ? `calc(100% - ${mainSidebarWidth}px)` : `20.25rem`
        }
      >
        <div>
          {leftDrawerBodyHandler(
            currentDrawer,
            setLeftSubDrawer,
            setIsLeftSubDrawerOpen,
            setIsDrawerOpen
          )}
        </div>
      </Drawer>
      <Drawer
        title={leftSubDrawerTitleHandler(leftSubDrawer)}
        extra={
          <div onClick={() => setIsLeftSubDrawerOpen(false)}>
            <ArrowLeftOS />
          </div>
        }
        placement="left"
        onClose={() => {
          setIsDrawerOpen(false);
          setIsLeftSubDrawerOpen(false);
        }}
        open={isLeftSubDrawerOpen}
        className={`ml-106 leftSubDrawer ${themeSelect}`}
        style={{ marginLeft: `${mainSidebarWidth}px`}}
        closeIcon={<CloseIcon />}
        mask={false}
        width={
          windowWidth <= 768 ? `calc(100% - ${mainSidebarWidth}px)` : `20.25rem`
        }
      >
        <div>{leftSubDrawerBodyHandler(leftSubDrawer, setLeftSubDrawer)}</div>
      </Drawer>

      <div className={isDrawerOpen ? "trade-section ml-378" : "trade-section"}>
        <Drawer
          title={rightDrawerTitleHandler(rightDrawerContent)}
          placement="right"
          onClose={() => setIsRightDrawerOpen(false)}
          open={isRightDrawerOpen}
          closeIcon={<CloseIcon />}
          className={`${themeSelect} rightDrawer`}
          width={
            windowWidth <= 768
              ? `calc(100% - ${mainSidebarWidth}px)`
              : `20.25rem`
          }
        >
          {rightDrawerBodyHandler(
            rightDrawerContent,
            setIsRightSubDrawerOpen,
            setIsRightSubDrawerContent
          )}
        </Drawer>

        <Drawer
          title={rightSubDrawerTitleHandler(rightSubDrawerContent)}
          extra={rightSubDrawerExtraHandler(
            rightSubDrawerContent,
            setIsRightSubDrawerOpen,
            setIsRightSubDrawerContent
          )}
          placement="right"
          onClose={() => {
            setIsRightDrawerOpen(false);
            setIsRightSubDrawerOpen(false);
          }}
          open={isRightSubDrawerOpen}
          closeIcon={<CloseIcon />}
          className={`${themeSelect} rightDrawer rightSubDrawer`}
          maskClassName="rightSubDrawerMask"
          width={
            windowWidth <= 768
              ? `calc(100% - ${mainSidebarWidth}px)`
              : `20.25rem`
          }
        >
          {rightSubDrawerBodyHandler(
            rightSubDrawerContent,
            setIsRightSubDrawerOpen,
            setIsRightSubDrawerContent,
            setIsRightDrawerContent
          )}
   
        </Drawer>

        <Topbar
          style={{ marginLeft: `${mainSidebarWidth}px` }}
          isDrawerOpen={isDrawerOpen}
          setIsRightDrawerOpen={setIsRightDrawerOpen}
          setIsRightDrawerContent={setIsRightDrawerContent}
          setIsDrawerOpen={setIsDrawerOpen}
          setCurrentDrawer={setCurrentDrawer}
          currentDrawer={currentDrawer}
          chartOptionMenus={chartOptionMenus}
        />
        
        <div
          className="trade-content"
          id="tradeContent"
          style={{ height: calculateTradeContentHeight() }}
        >
          <div className="trade-graph" id="tradeGraph">
    
            {chartInitialData ? (
             <div className="chart-container"  style={{ height: "100%", color:"white", position: 'relative' }}>
              {  renderSelectedChartType() }
              <div className="chart-options">
                {chartOptionMenus.map((data, _i) => (
                  <DropdownMenu key={_i} position={data.position} type={data?.type} menuItems={data.menus}>
                    <div className="chart-option" onClick={data.onClick}>
                        {data.icon}
                    </div>
                  </DropdownMenu>
                ))}
              </div>
              <div className="chart-zoom-controls">
                <div className="chart-control left-control" onClick={()=> handleZoomChartScale(false)}>
                  <ZoomOutChartIcon />
                </div>
                <DropdownMenu position="top" type="drop-down" menuItems={<>{renderTimeScaleOptions()}</>} customMenuItem>
                  <div className="chart-control center">
                      <span>{selectedTimeScale?.text.toUpperCase()}</span>
                  </div>
                </DropdownMenu>
                <div className="chart-control right-control" onClick={()=> handleZoomChartScale()}>
                  <ZoomInChartIcon />
                </div>
              </div>
              
             </div>
            ) : null}
           
          </div>
          
          <TradeForm bottomSidebarHeight={bottomSidebarHeight}  socketData={socketData?.barchart}/>
        </div>
      </div>


   
      

      {/* {!isWalkthroughSkipped && !loading && (
        <WalkThrough
          className={!isWalkthroughSkipped && !loading ? "" : "hidden"}
          tradeFormHeight={tradeFormHeight}
        />
      )} */}
    </div>
  );
};

export default Platform;
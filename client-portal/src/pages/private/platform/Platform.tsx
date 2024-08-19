import { useCallback, useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import TradeForm from "../../../components/tradeForm/TradeForm";
import "./platform.scss";
import { Drawer } from "antd";
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
import { setAppearanceBackground } from "../../lib/utils";
import { useAppSelector } from "@store/hooks";
import { UserSliceState } from "@store/slices/user";
import { AreaChart } from "./MainChart/AreaChart";
import {  isArrayEmpty, isObjectEmpty, timeScaleMenu } from "utils/utils";
import DropdownMenu from "components/dropdownMenu/DropdownMenu";
// import BarChart from "./MainChart/BarChart";
import { useNavigate } from "react-router-dom";
import { ColorType, createChart, CrosshairMode, IChartApi, LineStyle, UTCTimestamp } from "lightweight-charts";
import useSocketConnect from "hooks/useSocketConnect";

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
  // Chart refs and constants
  let chartContainerRef = useRef<HTMLDivElement>(null);
  let chartRef = useRef<IChartApi>();
  let seriesRef = useRef(null);

  

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
  const navigate = useNavigate();


  const isWalkthroughSkipped = user?.is_walkthrough ?? true;


  // console.log(user);

  // useEffect(() => {
  //   if (user?.is_walkthrough_completed) {
  //     navigate('/welcome');
  //   }
  // }, [user, navigate]);

  // useEffect(() => {
  //   setChartInitialData(initialData);

  // }, []);

  // Chart logic
  useEffect(() => {

    const chartContainer = chartContainerRef.current!;

    const chart = createChart(chartContainer, {
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
        rightOffset: 30,
        allowShiftVisibleRangeOnWhitespaceReplacement: true,
      },
      width: chartContainer?.clientWidth,
      height: 300,
    });
    let candlestickSeries = null;
    //  candle series 
    switch (selectedChart) {
      case 'area':
        candlestickSeries = chart.addAreaSeries({
          topColor: "#0c2c3b",
          bottomColor: 'transparent',
          lineColor: "#1973FA",
          lineWidth: 2
        });
        break;
      case 'bar':
        candlestickSeries = chart.addBarSeries({
          upColor: 'green',
          downColor: 'red'
        });
        break;
      case 'candlesticks':
      default:
        candlestickSeries = chart.addCandlestickSeries({
          upColor: 'green',
          downColor: 'red',
          borderDownColor: 'red',
          borderUpColor: 'green',
          wickDownColor: 'red',
          wickUpColor: 'green',
        });
        break;
    }

    // @ts-ignore
    seriesRef.current = candlestickSeries;  
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
      const sortedAndUniqueData = removeDuplicates(oldData.sort((a, b) => a.time - b.time));

      candlestickSeries.setData(sortedAndUniqueData);
    }

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
 
  }, [selectedChart,oldData]);

 
  useEffect(() => {
        // @ts-ignore
    if(!isObjectEmpty(socketData?.barchart)){
      // @ts-ignore
      seriesRef?.current?.update(socketData?.barchart);

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
  const handleChartSelectionClick = (type = "candlesticks") => {
    setSelectedChart(type);
  };

  
  const renderSelectedChartType = () => {
    switch (selectedChart) {
     
      default:
        
        return (
          
          <> 
            <MainChart data={oldData} selectedTimeScale={selectedTimeScale}  refs={{chartContainerRef, chartRef, seriesRef}}  chartScale={chartScale}  />
          </>
        )
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
          text: 'Area',
          onclick: () => handleChartSelectionClick('area'),
          icon: <AreaChartIcon />
        },
        {
          text: 'Japanese candlesticks',
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

              {renderSelectedChartType()}
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
          
          <TradeForm bottomSidebarHeight={bottomSidebarHeight} />
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
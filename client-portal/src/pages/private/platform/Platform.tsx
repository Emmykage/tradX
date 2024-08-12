import { useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import TradeForm from "../../../components/tradeForm/TradeForm";
import "./platform.scss";
import { Drawer } from "antd";
import { AreaChartIcon, ArrowLeftOS, BarChartIcon, CandleStickIcon, CloseIcon, MainChartAnalysisIcon, MainChartChangeIcon, MainChartSignalsIcon, ZoomInChartIcon, ZoomOutChartIcon } from "../../../assets/icons";
import WalkThrough from "./WalkThrough";

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
import { UserSliceState } from "@store/slices/user";
import { initialAreaData } from "./MainChart/areaData";
import { AreaChart } from "./MainChart/AreaChart";
import {  isArrayEmpty, timeScaleMenu } from "utils/utils";
import DropdownMenu from "components/dropdownMenu/DropdownMenu";
import BarChart from "./MainChart/BarChart";
import { useNavigate } from "react-router-dom";

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
  const [areaChartInitialData, setAreaChartInitialData] = useState<any>([]);
  const [chartScale, setChartScale] = useState(6);
  const [selectedChart, setSelectedChart] = useState('candlesticks');
  const [selectedTimeScale, setSelectedTimeScale] = useState<any>(timeScaleMenu[8]);
  const storedScale = localStorage.getItem("scale");

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

  const formatAreaData = () => {
    let datetime : any = initialAreaData.DateTime;
    let price: any = initialAreaData.Price;
    let size: any = initialAreaData.Size;
    const chart_data = [];
    const bar_data = [];
    let lastDateTime = 0;
    let step = 1;
    for (var i in Object.keys(datetime)) {
      var timestamp = datetime[i] / 1000;
      if (datetime[i] === lastDateTime) {
        timestamp = (datetime[i] + step) / 1000;
        step++;
      } else {
        step = 1;
        lastDateTime = datetime[i];
      }
      chart_data.push({ time: timestamp, value: price[i] });
      bar_data.push({ time: timestamp, value: size[i] });

      setAreaChartInitialData(chart_data);
    };

  };


  // candle series chart data formatting 

  const newCandleData= initialCandleData.map((d:any, _i: number)=>{
    var t = new Date();
    t.setSeconds(t.getSeconds() + _i);
    // return {time: d[0]/1000, open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
    return {time: Date.parse(t), open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
  })




  const isWalkthroughSkipped = user?.is_walkthrough ?? true;


  console.log(user);

  // useEffect(() => {
  //   if (user?.is_walkthrough_completed) {
  //     navigate('/welcome');
  //   }
  // }, [user, navigate]);

  useEffect(() => {
    setChartInitialData(initialData);
    formatAreaData();
  }, []);

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
      case  "candlesticks":
        return (<> <MainChart data={newCandleData} chartScale={chartScale} selectedTimeScale={selectedTimeScale}  /> </>)
      case "area": 
        return (<> {isArrayEmpty(areaChartInitialData)? <></>:<AreaChart chartData={areaChartInitialData} selectedTimeScale={selectedTimeScale}   chartScale={chartScale} />} </>)
      case "bar": 
        return (
          <> 
            <BarChart data={newCandleData}  selectedTimeScale={selectedTimeScale}   chartScale={chartScale}  /> 
          </>
        )
      default:
        return (
          <> 
            <MainChart data={newCandleData} selectedTimeScale={selectedTimeScale}   chartScale={chartScale}  /> 
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
               {/* pass dummy data newCandleData */}
              {/* <MainChart data={newCandleData} chartScale={chartScale}  /> */}
              {/* {isArrayEmpty(areaChartInitialData)? <></>:<AreaChart chartData={areaChartInitialData}  chartScale={chartScale} />} */}
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
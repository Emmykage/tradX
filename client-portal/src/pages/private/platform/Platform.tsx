import { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import TradeForm from "../../../components/tradeForm/TradeForm";
import "./platform.scss";
import { Drawer } from "antd";
import { ArrowLeftOS, CloseIcon } from "../../../assets/icons";
import WalkThrough from "./WalkThrough";

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
  const [showWalkThrough, setShowWalkThrough] = useState(true);
  const storedScale = localStorage.getItem("scale");
  const isWalkthroughSkipped = localStorage.getItem("walkthroughSkipped");

  useEffect(() => {
    setChartInitialData(initialData);
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

  return (
    <div className="platformWrapper">
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
        className="ml-106"
        style={{ marginLeft: `${mainSidebarWidth}px` }}
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
            setIsLeftSubDrawerOpen
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
        className="ml-106 leftSubDrawer"
        style={{ marginLeft: `${mainSidebarWidth}px` }}
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
          className="rightDrawer"
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
          className="rightDrawer rightSubDrawer"
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
        />

        <div
          className="trade-content"
          id="tradeContent"
          style={{ height: calculateTradeContentHeight() }}
        >
          <div className="trade-graph" id="tradeGraph">
            {chartInitialData?.length ? (
              <MainChart data={chartInitialData} />
            ) : null}
          </div>
          <TradeForm bottomSidebarHeight={bottomSidebarHeight} />
        </div>
      </div>

      {!isWalkthroughSkipped ? (
        <WalkThrough
          className={showWalkThrough ? "" : "hidden"}
          setShowWalkThrough={setShowWalkThrough}
        />
      ) : null}
    </div>
  );
};

export default Platform;

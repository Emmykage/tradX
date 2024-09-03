import Loading from "components/loading";
import {
  AiIcon,
  EventsIcon,
  HelpIcon,
  LogoIcon,
  MarketIcon,
  NewsIcon,
  TradesIcon,
} from "../../assets/icons";
import "./sidebar.scss";
import { Spin } from "antd";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setPortfolioWindow } from "@store/slices/app";

type DrawerType =
  | "trades"
  | "market"
  | "events"
  | "help"
  | "news"
  | "ai"
  | "assets"
  | null;

interface SidebarProps {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  setIsLeftSubDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLeftSubDrawerOpen: boolean;
  id?: string;
  onlineTraders?:number;
  currentDrawer: DrawerType;
  setCurrentDrawer: React.Dispatch<React.SetStateAction<DrawerType>>;
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  setIsDrawerOpen,
  isDrawerOpen,
  setIsLeftSubDrawerOpen,
  isLeftSubDrawerOpen,
  currentDrawer,
  setCurrentDrawer,
  onlineTraders,
  id,
}) => {
  const {togglePortfolioWindow} = useAppSelector(state => state.app)
  const dispatch = useAppDispatch()
  const onSelect = (activeDrawer: DrawerType) => {
    if (isLeftSubDrawerOpen) {
      setIsLeftSubDrawerOpen(false);
    } else {
      setIsDrawerOpen(
        isDrawerOpen && currentDrawer === activeDrawer ? false : true
      );
    }
    if(togglePortfolioWindow){
      dispatch(setPortfolioWindow(false))
    }
    setCurrentDrawer(activeDrawer);
  };



  return (
    <div className="sidebar" id={id ? id : ""} style={{zIndex:'900'}}>
      <div className="top">
        <div className="logo">
          <LogoIcon />
        </div>
        <button
          onClick={() => onSelect("trades")}
          className={isDrawerOpen && currentDrawer === "trades" ? "active" : ""}
        >
          <div className="icon flex justify-center">
            <TradesIcon />
          </div>
          <p className="text">Trades</p>
        </button>
        <button
          onClick={() => onSelect("market")}
          className={isDrawerOpen && currentDrawer === "market" ? "active" : ""}
        >
          <div className="icon flex justify-center">
            <MarketIcon />
          </div>
          <p className="text">Market</p>
        </button>
        <button
          onClick={() => onSelect("events")}
          className={isDrawerOpen && currentDrawer === "events" ? "active" : ""}
        >
          <div className="icon flex justify-center">
            <EventsIcon />
          </div>
          <p className="text">Events</p>
        </button>
        <button
          onClick={() => onSelect("help")}
          className={isDrawerOpen && currentDrawer === "help" ? "active" : ""}
        >
          <div className="icon flex justify-center">
            <HelpIcon />
          </div>
          <p className="text">Help</p>
        </button>
        <button
          onClick={() => onSelect("news")}
          className={isDrawerOpen && currentDrawer === "news" ? "active" : ""}
        >
          <div className="icon flex justify-center">
            <NewsIcon />
          </div>
          <p className="text">News</p>
        </button>
        <button
          onClick={() => onSelect("ai")}
          className={isDrawerOpen && currentDrawer === "ai" ? "active" : ""}
        >
          <div className="icon flex justify-center">
            <AiIcon />
          </div>
          <p className="text">AI</p>
        </button>
      </div>
      <div className="bottom">
        <div className="online">
          {
            onlineTraders ? (
              <p className="numberOnline">{onlineTraders || 'loading'}</p>

            ): (
              <Spin />
            )
          }
          <p className="onl">Online</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

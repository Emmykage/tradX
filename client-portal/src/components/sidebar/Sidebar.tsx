import {
  EventsIcon,
  HelpIcon,
  LogoIcon,
  MarketIcon,
  TradesIcon,
} from "../../assets/icons";
import "./sidebar.scss";

interface SidebarProps {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  currentDrawer: "trades" | "market" | "events" | "help" | "convert" | null;
  setCurrentDrawer: React.Dispatch<
    React.SetStateAction<
      "trades" | "market" | "events" | "help" | "convert" | null
    >
  >;
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  setIsDrawerOpen,
  currentDrawer,
  setCurrentDrawer,
}) => {
  return (
    <div className="sidebar" id="main_sidebar">
      <div className="top">
        <div className="logo">
          <LogoIcon />
        </div>
        <button
          onClick={() => {
            setIsDrawerOpen(currentDrawer === "trades" ? false : true);
            setCurrentDrawer("trades");
            currentDrawer === "trades" && setCurrentDrawer(null);
          }}
          className={currentDrawer === "trades" ? "active" : ""}
        >
          <div className="icon">
            <TradesIcon />
          </div>
          <p className="text">Trades</p>
        </button>
        <button
          onClick={() => {
            setIsDrawerOpen(currentDrawer === "market" ? false : true);
            setCurrentDrawer("market");
            currentDrawer === "market" && setCurrentDrawer(null);
          }}
          className={currentDrawer === "market" ? "active" : ""}
        >
          <div className="icon">
            <MarketIcon />
          </div>
          <p className="text">Market</p>
        </button>
        <button
          onClick={() => {
            setIsDrawerOpen(currentDrawer === "events" ? false : true);
            setCurrentDrawer("events");
            currentDrawer === "events" && setCurrentDrawer(null);
          }}
          className={currentDrawer === "events" ? "active" : ""}
        >
          <div className="icon">
            <EventsIcon />
          </div>
          <p className="text">Events</p>
        </button>
        <button
          onClick={() => {
            setIsDrawerOpen(currentDrawer === "help" ? false : true);
            setCurrentDrawer("help");
            currentDrawer === "help" && setCurrentDrawer(null);
          }}
          className={currentDrawer === "help" ? "active" : ""}
        >
          <div className="icon">
            <HelpIcon />
          </div>
          <p className="text">Help</p>
        </button>
      </div>
      <div className="bottom">
        <div className="online">
          <p className="numberOnline">7722</p>
          <p className="onl">Online</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

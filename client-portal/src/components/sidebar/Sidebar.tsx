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
  id?: string;
  currentDrawer: "trades" | "market" | "events" | "help" | "convert" | null;
  setCurrentDrawer: React.Dispatch<
    React.SetStateAction<
      "trades" | "market" | "events" | "help" | "convert" | null
    >
  >;
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  setIsDrawerOpen,
  isDrawerOpen,
  currentDrawer,
  setCurrentDrawer,
  id,
}) => {
  return (
    <div className="sidebar" id={id ? id : ""}>
      <div className="top">
        <div className="logo">
          <LogoIcon />
        </div>
        <button
          onClick={() => {
            setIsDrawerOpen(
              isDrawerOpen && currentDrawer === "trades" ? false : true
            );
            setCurrentDrawer("trades");
          }}
          className={isDrawerOpen && currentDrawer === "trades" ? "active" : ""}
        >
          <div className="icon">
            <TradesIcon />
          </div>
          <p className="text">Trades</p>
        </button>
        <button
          onClick={() => {
            setIsDrawerOpen(
              isDrawerOpen && currentDrawer === "market" ? false : true
            );
            setCurrentDrawer("market");
          }}
          className={isDrawerOpen && currentDrawer === "market" ? "active" : ""}
        >
          <div className="icon">
            <MarketIcon />
          </div>
          <p className="text">Market</p>
        </button>
        <button
          onClick={() => {
            setIsDrawerOpen(
              isDrawerOpen && currentDrawer === "events" ? false : true
            );
            setCurrentDrawer("events");
          }}
          className={isDrawerOpen && currentDrawer === "events" ? "active" : ""}
        >
          <div className="icon">
            <EventsIcon />
          </div>
          <p className="text">Events</p>
        </button>
        <button
          onClick={() => {
            setIsDrawerOpen(
              isDrawerOpen && currentDrawer === "help" ? false : true
            );
            setCurrentDrawer("help");
          }}
          className={isDrawerOpen && currentDrawer === "help" ? "active" : ""}
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

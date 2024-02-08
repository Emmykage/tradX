import {
  EventsIcon,
  HelpIcon,
  LogoIcon,
  MarketIcon,
  TradesIcon,
} from "../../assets/icons";
import "./sidebar.scss";

type DrawerType = "trades" | "market" | "events" | "help" | "assets" | null;

interface SidebarProps {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  setIsLeftSubDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLeftSubDrawerOpen: boolean;
  id?: string;
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
  id,
}) => {
  const onSelect = (activeDrawer: DrawerType) => {
    if (isLeftSubDrawerOpen) {
      setIsLeftSubDrawerOpen(false);
    } else {
      setIsDrawerOpen(
        isDrawerOpen && currentDrawer === activeDrawer ? false : true
      );
    }
    setCurrentDrawer(activeDrawer);
  };

  return (
    <div className="sidebar" id={id ? id : ""}>
      <div className="top">
        <div className="logo">
          <LogoIcon />
        </div>
        <button
          onClick={() => onSelect("trades")}
          className={isDrawerOpen && currentDrawer === "trades" ? "active" : ""}
        >
          <div className="icon">
            <TradesIcon />
          </div>
          <p className="text">Trades</p>
        </button>
        <button
          onClick={() => onSelect("market")}
          className={isDrawerOpen && currentDrawer === "market" ? "active" : ""}
        >
          <div className="icon">
            <MarketIcon />
          </div>
          <p className="text">Market</p>
        </button>
        <button
          onClick={() => onSelect("events")}
          className={isDrawerOpen && currentDrawer === "events" ? "active" : ""}
        >
          <div className="icon">
            <EventsIcon />
          </div>
          <p className="text">Events</p>
        </button>
        <button
          onClick={() => onSelect("help")}
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

import { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import TradeForm from "../../../components/tradeForm/TradeForm";
import "./platform.scss";
import { Drawer } from "antd";
import { CloseIcon } from "../../../assets/icons";
import TradesMenu from "./platformMenus/trades/TradesMenu";
import MarketMenu from "./platformMenus/market/MarketMenu";
import EventsMenu from "./platformMenus/events/EventsMenu";
import HelpMenu from "./platformMenus/help/HelpMenu";
import PaymentsMenu from "./platformMenus/payments/PaymentsMenu";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import ProfileMenu from "./platformMenus/profile/ProfileMenu";
import AccountMenu from "./platformMenus/account/AccountMenu";

interface PlatformProps {}

const Platform: React.FunctionComponent<PlatformProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState<boolean>(false);
  const [rightDrawerContent, setIsRightDrawerContent] = useState<string | null>(
    null
  );
  const [currentDrawer, setCurrentDrawer] = useState<
    "trades" | "market" | "events" | "help" | "convert" | null
  >(null);

  const RenderConversionDrawerContent = () => {
    return <p>conv contents...</p>;
  };

  useEffect(() => {
    const res = window.document;
    console.log(res);
  });

  return (
    <div className="platformWrapper">
      <Sidebar
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        currentDrawer={currentDrawer}
        setCurrentDrawer={setCurrentDrawer}
      />
      {isDrawerOpen && (
        <Drawer
          title={
            currentDrawer === "trades"
              ? "Trades"
              : currentDrawer === "events"
              ? "Events"
              : currentDrawer === "market"
              ? "Market"
              : currentDrawer === "help"
              ? "Help"
              : currentDrawer === "convert"
              ? "Assests"
              : ""
          }
          placement="left"
          onClose={() => {
            setIsDrawerOpen(false);
            setCurrentDrawer(null);
          }}
          open={isDrawerOpen}
          className="ml-106"
          closeIcon={<CloseIcon />}
          mask={false}
        >
          <div>
            {currentDrawer === "trades" ? (
              <TradesMenu />
            ) : currentDrawer === "market" ? (
              <MarketMenu />
            ) : currentDrawer === "events" ? (
              <EventsMenu />
            ) : currentDrawer === "help" ? (
              <HelpMenu />
            ) : currentDrawer === "convert" ? (
              <RenderConversionDrawerContent />
            ) : (
              <></>
            )}
          </div>
        </Drawer>
      )}
      <div className={isDrawerOpen ? "trade-section ml-378" : "trade-section"}>
        {isRightDrawerOpen && (
          <Drawer
            title={
              rightDrawerContent === "account"
                ? "Accounts"
                : rightDrawerContent === "payments"
                ? "Payments"
                : rightDrawerContent === "profile"
                ? "Profile"
                : ""
            }
            placement="right"
            onClose={() => setIsRightDrawerOpen(false)}
            open={isRightDrawerOpen}
            closeIcon={<CloseIcon />}
            className="rightDrawer"
          >
            {rightDrawerContent === "payments" ? (
              <PaymentsMenu />
            ) : rightDrawerContent === "profile" ? (
              <ProfileMenu />
            ) : rightDrawerContent === "account" ? (
              <AccountMenu />
            ) : (
              <></>
            )}
          </Drawer>
        )}
        <Topbar
          setIsRightDrawerOpen={setIsRightDrawerOpen}
          setIsRightDrawerContent={setIsRightDrawerContent}
          setIsDrawerOpen={setIsDrawerOpen}
          setCurrentDrawer={setCurrentDrawer}
          currentDrawer={currentDrawer}
        />
        <div className="trade-content">
          <div className="trade-graph">
            <AdvancedRealTimeChart
              theme="dark"
              autosize
              hide_side_toolbar
              save_image={false}
              allow_symbol_change
              style="3"
              //backgroundColor="#0e0f12"
              withdateranges={false}
              symbol="EURUSD"
            ></AdvancedRealTimeChart>
          </div>
          <TradeForm />
        </div>
      </div>
    </div>
  );
};

export default Platform;

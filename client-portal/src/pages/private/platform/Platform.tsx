import { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import TradeForm from "../../../components/tradeForm/TradeForm";
import "./platform.scss";
import { Drawer } from "antd";
import { ArrowLeftOS, CloseIcon } from "../../../assets/icons";
import TradesMenu from "./platformMenus/trades/TradesMenu";
import MarketMenu from "./platformMenus/market/MarketMenu";
import EventsMenu from "./platformMenus/events/EventsMenu";
import HelpMenu from "./platformMenus/help/HelpMenu";
import PaymentsMenu from "./platformMenus/payments/PaymentsMenu";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import ProfileMenu from "./platformMenus/profile/ProfileMenu";
import AccountMenu from "./platformMenus/account/AccountMenu";
import TwoFactorMenu from "./platformMenus/twoFactor/TwoFactorMenu";
import SettingsMenu from "./platformMenus/settings/SettingsMenu";
import VerificationMenu from "./platformMenus/verification/VerificationMenu";
import PersonalSettingsMenu from "./platformMenus/personalSettings/PersonalSettingsMenu";
import AppearanceMenu from "./platformMenus/appearance/AppearanceMenu";
import TransferMenu from "./platformMenus/transfer/TransferMenu";
import TradingMenu from "./platformMenus/trading/TradingMenu";
import NotificationsMenu from "./platformMenus/notifications/NotificationsMenu";
import BarcodeMenu from "./platformMenus/barcode/BarcodeMenu";
import AssetsMenu from "./platformMenus/assets/AssetsMenu";
import HelpCenter from "./platformMenus/helpCenter/HelpCenter";
import SupportMenu from "./platformMenus/support/SupportMenu";
import UserNotificationsMenu from "./platformMenus/userNotifications/UserNotificationsMenu";
import ChangePassword from "./platformMenus/changePassword/ChangePassword";
import EditName from "./platformMenus/editName/EditName";
import ConfirmMail from "./platformMenus/confirmMail/ConfirmMail";
import ConfirmPhone from "./platformMenus/confirmPhone/ConfirmPhone";
import SelectAccount from "./platformMenus/selectAccount/SelectAccount";
import WithdrawMenu from "./platformMenus/withdraw/WithdrawMenu";

interface PlatformProps {}

const Platform: React.FunctionComponent<PlatformProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isLeftSubDrawerOpen, setIsLeftSubDrawerOpen] =
    useState<boolean>(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState<boolean>(false);
  const [rightDrawerContent, setIsRightDrawerContent] = useState<string | null>(
    null
  );
  const [isRightSubDrawerOpen, setIsRightSubDrawerOpen] =
    useState<boolean>(false);
  const [rightSubDrawerContent, setIsRightSubDrawerContent] = useState<
    string | null
  >(null);
  const [currentDrawer, setCurrentDrawer] = useState<
    "trades" | "market" | "events" | "help" | "assets" | null
  >(null);
  const [leftSubDrawer, setLeftSubDrawer] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [tradeFormHeight, setTradeFormHeight] = useState(0);
  const [mainSidebarWidth, setMainSidebarWidth] = useState(0);
  const [bottomSidebarHeight, setBottomSidebarHeight] = useState(0);
  const storedScale = localStorage.getItem("scale");

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

  // useEffect(() => {
  //   const res = window.document;
  //   console.log(res);
  // });

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
        title={
          currentDrawer === "trades"
            ? "Trades"
            : currentDrawer === "events"
            ? "Events"
            : currentDrawer === "market"
            ? "Market"
            : currentDrawer === "help"
            ? "Help"
            : currentDrawer === "assets"
            ? "Assets"
            : ""
        }
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
          windowWidth <= 768 ? `calc(100% - ${mainSidebarWidth}px)` : `29.25rem`
        }
      >
        <div>
          {currentDrawer === "trades" ? (
            <TradesMenu />
          ) : currentDrawer === "market" ? (
            <MarketMenu />
          ) : currentDrawer === "events" ? (
            <EventsMenu />
          ) : currentDrawer === "help" ? (
            <HelpMenu
              setLeftSubDrawer={setLeftSubDrawer}
              setIsLeftSubDrawerOpen={setIsLeftSubDrawerOpen}
            />
          ) : currentDrawer === "assets" ? (
            <AssetsMenu />
          ) : (
            <></>
          )}
        </div>
      </Drawer>
      <Drawer
        title={
          leftSubDrawer === "help-center"
            ? "Help Center"
            : leftSubDrawer === "support"
            ? "Support"
            : ""
        }
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
          windowWidth <= 768 ? `calc(100% - ${mainSidebarWidth}px)` : `29.25rem`
        }
      >
        <div>
          {leftSubDrawer === "help-center" ? (
            <HelpCenter />
          ) : leftSubDrawer === "support" ? (
            <SupportMenu />
          ) : (
            <></>
          )}
        </div>
      </Drawer>

      <div
        className={isDrawerOpen ? "trade-section ml-378" : "trade-section"}
        style={{ marginLeft: `${mainSidebarWidth}px` }}
      >
        <Drawer
          title={
            rightDrawerContent === "account"
              ? "Accounts"
              : rightDrawerContent === "payments"
              ? "Payments"
              : rightDrawerContent === "profile"
              ? "Profile"
              : rightDrawerContent === "verification"
              ? "Verification"
              : ""
          }
          placement="right"
          onClose={() => setIsRightDrawerOpen(false)}
          open={isRightDrawerOpen}
          closeIcon={<CloseIcon />}
          className="rightDrawer"
          width={
            windowWidth <= 768
              ? `calc(100% - ${mainSidebarWidth}px)`
              : `29.25rem`
          }
        >
          {rightDrawerContent === "payments" ? (
            <PaymentsMenu
              setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
              setIsRightSubDrawerContent={setIsRightSubDrawerContent}
            />
          ) : rightDrawerContent === "profile" ? (
            <ProfileMenu
              setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
              setIsRightSubDrawerContent={setIsRightSubDrawerContent}
            />
          ) : rightDrawerContent === "account" ? (
            <AccountMenu />
          ) : rightDrawerContent === "verification" ? (
            <VerificationMenu />
          ) : (
            <></>
          )}
        </Drawer>

        <Drawer
          title={
            rightSubDrawerContent === "settings"
              ? "Settings"
              : rightSubDrawerContent === "twofactor"
              ? "Two-factor Authentication"
              : rightSubDrawerContent === "personalSettings"
              ? "Personal settings"
              : rightSubDrawerContent === "appearance"
              ? "Appearance"
              : rightSubDrawerContent === "transfer"
              ? "Transfer"
              : rightSubDrawerContent === "trading"
              ? "Trading"
              : rightSubDrawerContent === "notifications"
              ? "Notifications"
              : rightSubDrawerContent === "barcode"
              ? "Barcode"
              : rightSubDrawerContent === "user-notifications"
              ? "Notifications"
              : rightSubDrawerContent === "change-password"
              ? "Change Password"
              : rightSubDrawerContent === "edit-name"
              ? "Edit name"
              : rightSubDrawerContent === "confirm-email"
              ? "Confirm your email"
              : rightSubDrawerContent === "confirm-phone"
              ? "Confirm phone number"
              : rightSubDrawerContent === "select-account"
              ? "To:"
              : rightSubDrawerContent === "withdraw"
              ? "Withdraw"
              : ""
          }
          extra={
            rightSubDrawerContent === "twofactor" ? (
              <div onClick={() => setIsRightSubDrawerContent("settings")}>
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "personalSettings" ? (
              <div onClick={() => setIsRightSubDrawerContent("settings")}>
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "appearance" ? (
              <div onClick={() => setIsRightSubDrawerContent("settings")}>
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "trading" ? (
              <div onClick={() => setIsRightSubDrawerContent("settings")}>
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "notifications" ? (
              <div onClick={() => setIsRightSubDrawerContent("settings")}>
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "change-password" ? (
              <div onClick={() => setIsRightSubDrawerContent("settings")}>
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "edit-name" ? (
              <div
                onClick={() => setIsRightSubDrawerContent("personalSettings")}
              >
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "confirm-email" ? (
              <div
                onClick={() => setIsRightSubDrawerContent("personalSettings")}
              >
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "confirm-phone" ? (
              <div
                onClick={() => setIsRightSubDrawerContent("personalSettings")}
              >
                <ArrowLeftOS />
              </div>
            ) : rightSubDrawerContent === "select-account" ? (
              <div onClick={() => setIsRightSubDrawerContent("transfer")}>
                <ArrowLeftOS />
              </div>
            ) : (
              <div onClick={() => setIsRightSubDrawerOpen(false)}>
                <ArrowLeftOS />
              </div>
            )
          }
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
              : `29.25rem`
          }
        >
          {rightSubDrawerContent === "settings" ? (
            <SettingsMenu
              setIsRightSubDrawerContent={setIsRightSubDrawerContent}
            />
          ) : rightSubDrawerContent === "twofactor" ? (
            <TwoFactorMenu />
          ) : rightSubDrawerContent === "personalSettings" ? (
            <PersonalSettingsMenu
              setIsRightSubDrawerContent={setIsRightSubDrawerContent}
            />
          ) : rightSubDrawerContent === "appearance" ? (
            <AppearanceMenu />
          ) : rightSubDrawerContent === "transfer" ? (
            <TransferMenu
              setIsRightSubDrawerContent={setIsRightSubDrawerContent}
            />
          ) : rightSubDrawerContent === "trading" ? (
            <TradingMenu />
          ) : rightSubDrawerContent === "notifications" ? (
            <NotificationsMenu />
          ) : rightSubDrawerContent === "barcode" ? (
            <BarcodeMenu />
          ) : rightSubDrawerContent === "user-notifications" ? (
            <UserNotificationsMenu />
          ) : rightSubDrawerContent === "change-password" ? (
            <ChangePassword />
          ) : rightSubDrawerContent === "edit-name" ? (
            <EditName />
          ) : rightSubDrawerContent === "confirm-email" ? (
            <ConfirmMail />
          ) : rightSubDrawerContent === "confirm-phone" ? (
            <ConfirmPhone />
          ) : rightSubDrawerContent === "select-account" ? (
            <SelectAccount />
          ) : rightSubDrawerContent === "withdraw" ? (
            <WithdrawMenu />
          ) : (
            <></>
          )}
        </Drawer>

        <Topbar
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
          <div className="trade-graph">
            <AdvancedRealTimeChart
              theme="dark"
              autosize
              hide_side_toolbar
              save_image={false}
              allow_symbol_change
              style="3"
              withdateranges={false}
              symbol="EURUSD"
            ></AdvancedRealTimeChart>
          </div>
          <TradeForm bottomSidebarHeight={bottomSidebarHeight} />
        </div>
      </div>
    </div>
  );
};

export default Platform;

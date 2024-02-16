import { Dispatch, SetStateAction } from "react";
import AssetsMenu from "./platformMenus/assets/AssetsMenu";
import EventsMenu from "./platformMenus/events/EventsMenu";
import HelpMenu from "./platformMenus/help/HelpMenu";
import MarketMenu from "./platformMenus/market/MarketMenu";
import TradesMenu from "./platformMenus/trades/TradesMenu";
import { CurrentDrawerType, LeftSubDrawer, RightDrawerContent, RightSubDrawerContent } from "./types";
import HelpCenter from "./platformMenus/helpCenter/HelpCenter";
import SupportMenu from "./platformMenus/support/SupportMenu";
import TradingPlatform from "./platformMenus/tradingPlatform/TradingPlatform";
import TradingPlatformInfo from "./platformMenus/tradingPlatformInfo/TradingPlatformInfo";
import OlympTradeInfo from "./platformMenus/olympTradeInfo/OlympTradeInfo";
import PaymentsMenu from "./platformMenus/payments/PaymentsMenu";
import ProfileMenu from "./platformMenus/profile/ProfileMenu";
import AccountMenu from "./platformMenus/account/AccountMenu";
import VerificationMenu from "./platformMenus/verification/VerificationMenu";
import SettingsMenu from "./platformMenus/settings/SettingsMenu";
import TwoFactorMenu from "./platformMenus/twoFactor/TwoFactorMenu";
import PersonalSettingsMenu from "./platformMenus/personalSettings/PersonalSettingsMenu";
import AppearanceMenu from "./platformMenus/appearance/AppearanceMenu";
import TransferMenu from "./platformMenus/transfer/TransferMenu";
import TradingMenu from "./platformMenus/trading/TradingMenu";
import NotificationsMenu from "./platformMenus/notifications/NotificationsMenu";
import BarcodeMenu from "./platformMenus/barcode/BarcodeMenu";
import UserNotificationsMenu from "./platformMenus/userNotifications/UserNotificationsMenu";
import ChangePassword from "./platformMenus/changePassword/ChangePassword";
import EditName from "./platformMenus/editName/EditName";
import ConfirmMail from "./platformMenus/confirmMail/ConfirmMail";
import ConfirmPhone from "./platformMenus/confirmPhone/ConfirmPhone";
import SelectAccount from "./platformMenus/selectAccount/SelectAccount";
import WithdrawMenu from "./platformMenus/withdraw/WithdrawMenu";
import AddAccountMenu from "./platformMenus/add-account/AddAccount";
import TradersWayMenu from "./platformMenus/tradersWay/TradersWayMenu";
import VerifyPayment from "./platformMenus/VerifyPayment/VerifyPayment";
import MagicBoxRewards from "./platformMenus/MagicBoxRewards/MagicBoxRewards";
import InviteFriends from "./platformMenus/InviteFriends/InviteFriends";
import { ArrowLeftOS } from "../../../assets/icons";
import Deposit from "./platformMenus/deposit/Deposit";
import SelectAmountMenu from "./platformMenus/selectAmountMenu/SelectAmountMenu";
import CardDetailsMenu from "./platformMenus/cardDetailsMenu/CardDetailsMenu";
import PromoCodes from "./platformMenus/promoCodes/PromoCodes";
import WithdrawAccount from "./platformMenus/withdrawAccount/WithdrawAccount";
import TransferAccountSelectMenu from "./platformMenus/transferAccountSelectMenu/TransferAccountSelectMenu";

// Left Drawer Handlers
export function leftDarwerTitleHandler(currentDrawer: CurrentDrawerType): string {
  switch (currentDrawer) {
    case "trades":
      return "Trades";
    case "events":
      return "Events";
    case "market":
      return "Market";
    case "help":
      return "Help";
    case "assets":
      return "Assets";
    default:
      return "";
  }
}
export function leftDrawerBodyHandler(
  currentDrawer: CurrentDrawerType,
  setLeftSubDrawer: Dispatch<SetStateAction<LeftSubDrawer>>,
  setIsLeftSubDrawerOpen: Dispatch<SetStateAction<boolean>>
): JSX.Element | null {
  switch (currentDrawer) {
    case "trades":
      return <TradesMenu />;
    case "market":
      return <MarketMenu />;
    case "events":
      return <EventsMenu />;
    case "help":
      return (
        <HelpMenu
          setLeftSubDrawer={setLeftSubDrawer}
          setIsLeftSubDrawerOpen={setIsLeftSubDrawerOpen}
        />
      );
    case "assets":
      return <AssetsMenu />;
    default:
      return null;
  }
}

// Left Sub Drawer Handlers
export function leftSubDrawerTitleHandler(leftSubDrawer: LeftSubDrawer): string {
  switch (leftSubDrawer) {
    case "help-center":
      return "Help Center";
    case "support":
      return "Support";
    case "trading-platform":
      return "Help Center";
    case "why-coose-us":
      return "Help Center";
    default:
      return "";
  }
}
export function leftSubDrawerBodyHandler(
  leftSubDrawer: LeftSubDrawer,
  setLeftSubDrawer: Dispatch<SetStateAction<LeftSubDrawer>>
): JSX.Element | null {
  switch (leftSubDrawer) {
    case "help-center":
      return <HelpCenter setLeftSubDrawer={setLeftSubDrawer} />;
    case "support":
      return <SupportMenu />;
    case "trading-platform":
      return <TradingPlatform setLeftSubDrawer={setLeftSubDrawer} />;
    case "what-is-trading":
      return <TradingPlatformInfo setLeftSubDrawer={setLeftSubDrawer} />;
    case "why-coose-us":
      return <OlympTradeInfo setLeftSubDrawer={setLeftSubDrawer} />;
    default:
      return null;
  }
}

// Right Drawer Handlers
export function rightDrawerTitleHandler(
  rightDrawerContent: RightDrawerContent
): string {
  switch (rightDrawerContent) {
    case "account":
      return "Accounts";
    case "profile":
      return "Profile";
    case "payments":
      return "Payments";
    case "verification":
      return "Verification";
    case "verify-payment":
      return "Confirm Payment";
    default:
      return "";
  }
};

export function rightDrawerBodyHandler(
  rightDrawerContent: RightDrawerContent,
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>,
  setIsRightSubDrawerContent: Dispatch<
    SetStateAction<RightSubDrawerContent>
  >
): JSX.Element | null {
  switch (rightDrawerContent) {
    case "payments":
      return (
        <PaymentsMenu
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "profile":
      return (
        <ProfileMenu
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "account":
      return (
        <AccountMenu
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "verification":
      return <VerificationMenu />;
    default:
      return null;
  }
};

// Right Sub Drawer Handlers
export function rightSubDrawerTitleHandler(
  rightSubDrawerContent: RightSubDrawerContent
): RightSubDrawerContent | string {
  switch (rightSubDrawerContent) {
    case "settings":
      return "Settings";
    case "twofactor":
      return "Two-factor Authentication";
    case "personalSettings":
      return "Personal settings";
    case "appearance":
      return "Appearance";
    case "transfer":
      return "Transfer";
    case "trading":
      return "Trading";
    case "notifications":
      return "Notifications";
    case "barcode":
      return "Barcode";
    case "user-notifications":
      return "Notifications";
    case "change-password":
      return "Change Password";
    case "edit-name":
      return "Edit name";
    case "confirm-email":
      return "Confirm your email";
    case "confirm-phone":
      return "Confirm phone number";
    case "select-account":
      return "To:";
    case "withdraw":
      return "Withdraw";
    case "add-account":
      return "Add an account";
    case "traders-way":
      return "Trader's Way";
    case "invite-friends":
      return "Invite Friends & Get Rewards";
    case "payments-deposit":
      return "Deposit";
    case "select-deposit-amount":
      return "Select Deposit Amount";
    case "payment-method":
      return "Payment Method";
    case "card-details-menu":
      return "Deposit";
    case "select-withdraw-account":
      return "Select Account";
    default:
      return "";
  }
}

export function rightSubDrawerBodyHandler(
  rightSubDrawerContent: RightSubDrawerContent,
  setIsRightSubDrawerOpen: Dispatch<React.SetStateAction<boolean>>,
  setIsRightSubDrawerContent: Dispatch<
    React.SetStateAction<RightSubDrawerContent>
  >
): JSX.Element | null {
  switch (rightSubDrawerContent) {
    case "settings":
      return (
        <SettingsMenu setIsRightSubDrawerContent={setIsRightSubDrawerContent} />
      );
    case "twofactor":
      return <TwoFactorMenu />;
    case "personalSettings":
      return (
        <PersonalSettingsMenu
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "appearance":
      return <AppearanceMenu />;
    case "transfer":
      return (
        <TransferMenu
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "trading":
      return <TradingMenu />;
    case "notifications":
      return <NotificationsMenu />;
    case "barcode":
      return <BarcodeMenu />;
    case "user-notifications":
      return <UserNotificationsMenu />;
    case "change-password":
      return <ChangePassword />;
    case "edit-name":
      return <EditName />;
    case "confirm-email":
      return <ConfirmMail />;
    case "confirm-phone":
      return <ConfirmPhone />;
    case "select-account":
      return (
        <SelectAccount
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "withdraw":
      return (
        <WithdrawMenu
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "add-account":
      return <AddAccountMenu />;
    case "traders-way":
      return <TradersWayMenu />;
    case "verify-payment":
      return <VerifyPayment />;
    case "mega-box-rewards":
      return <MagicBoxRewards />;
    case "invite-friends":
      return (
        <InviteFriends
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "payments-deposit":
      return (
        <Deposit
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "select-deposit-amount":
      return (
        <SelectAmountMenu
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    case "card-details-menu":
      return <CardDetailsMenu />;
    case "payment-method":
      return <></>;
    case "payments-promo-code":
      return <PromoCodes />;
    case "select-withdraw-account":
      return (
        <WithdrawAccount
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
      );
    // case "transfer-account-select-menu":
    //   return (
    //     <TransferAccountSelectMenu
    //       setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
    //       setIsRightSubDrawerContent={setIsRightSubDrawerContent}
    //     />
    //   );
    default:
      return null;
  }
}


export function rightSubDrawerExtraHandler(
  rightSubDrawerContent: RightSubDrawerContent,
  setIsRightSubDrawerOpen: Dispatch<React.SetStateAction<boolean>>,
  setIsRightSubDrawerContent: Dispatch<
    React.SetStateAction<RightSubDrawerContent>
  >
): JSX.Element | null {
  switch (rightSubDrawerContent) {
    case "twofactor":
    case "personalSettings":
    case "appearance":
    case "trading":
    case "notifications":
    case "change-password":
      return (
        <div onClick={() => setIsRightSubDrawerContent("settings")}>
          <ArrowLeftOS />
        </div>
      );
    case "edit-name":
    case "confirm-email":
    case "confirm-phone":
      return (
        <div onClick={() => setIsRightSubDrawerContent("personalSettings")}>
          <ArrowLeftOS />
        </div>
      );
    case "select-account":
      return (
        <div onClick={() => setIsRightSubDrawerContent("transfer")}>
          <ArrowLeftOS />
        </div>
      );
    case "verify-payment":
    case "mega-box-rewards":
      return (
        <div onClick={() => setIsRightSubDrawerContent("invite-friends")}>
          <ArrowLeftOS />
        </div>
      );
    case "select-deposit-amount":
    case "payment-method":
    case "payments-promo-code":
    case "card-details-menu":
      return (
        <div onClick={() => setIsRightSubDrawerContent("payments-deposit")}>
          <ArrowLeftOS />
        </div>
      );
    case "select-withdraw-account":
      return (
        <div onClick={() => setIsRightSubDrawerContent("withdraw")}>
          <ArrowLeftOS />
        </div>
      );

    default:
      return (
        <div onClick={() => setIsRightSubDrawerOpen(false)}>
          <ArrowLeftOS />
        </div>
      );
  }
}

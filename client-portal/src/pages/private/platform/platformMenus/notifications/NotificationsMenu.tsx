import Toggle from "../../../../../components/toggle/Toggle";
import "./notificationsMenu.scss";

interface NotificationsMenuProps {}

const NotificationsMenu: React.FunctionComponent<
  NotificationsMenuProps
> = () => {
  return (
    <div className="notificationsMenu">
      <div className="notificationsMenuSection">
        <p className="notificationsSectionTitle">
          Select the notifications you want to receive
        </p>
        <Toggle
          label="Pronos"
          subtext="Special offers, news, and features"
          defaultChecked
        />
        <Toggle
          label="Trading"
          subtext="Trade results and price alerts"
          defaultChecked
        />
        <Toggle
          label="Trading Signals"
          subtext="Only for Intraday and Swing signals categories"
        />
        <Toggle
          label="Push Notifications"
          subtext="Receive push notifications directly in your browser"
          infoText="Why should I receive them?"
        />
      </div>
    </div>
  );
};

export default NotificationsMenu;

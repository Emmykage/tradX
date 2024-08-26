import MainItemCard from "components/mainItemCard/MainItemCard";
import "./userNotifications.scss";

interface UserNotificationsMenuProps {}

const UserNotificationsMenu: React.FunctionComponent<
  UserNotificationsMenuProps
> = () => {
  return (
    <>
    {/* <div className="userNotificationsMenu">
      <p className="menuText">No New Notifications</p>
    </div> */}
      <MainItemCard variant={3} className="notification-container">
        <div className="userNotificationsMessageContainer">
          <h4 className="header">Promo Notification</h4>
          <p className="notification-text">Notification body </p>
        </div>
      </MainItemCard>
      <MainItemCard variant={3} className="notification-container">
        <div className="userNotificationsMessageContainer">
          <h4 className="header">Promo Notification</h4>
          <p className="notification-text">Notification body </p>
        </div>
      </MainItemCard>
      <MainItemCard variant={3} className="notification-container">
        <div className="userNotificationsMessageContainer">
          <h4 className="header">Promo Notification</h4>
          <p className="notification-text">Notification body </p>
        </div>
      </MainItemCard>
    </>
  );
};

export default UserNotificationsMenu;

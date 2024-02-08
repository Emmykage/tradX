import "./userNotifications.scss";

interface UserNotificationsMenuProps {}

const UserNotificationsMenu: React.FunctionComponent<
  UserNotificationsMenuProps
> = () => {
  return (
    <div className="userNotificationsMenu">
      <p className="menuText">No New Notifications</p>
    </div>
  );
};

export default UserNotificationsMenu;

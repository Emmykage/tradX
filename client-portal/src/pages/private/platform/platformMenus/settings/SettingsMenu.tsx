import {
  ExitIcon,
  LockIcon,
  NotificationIcon,
  PhoneIcon,
  TradingIcon,
  UserIcon,
} from "../../../../../assets/icons";
import EnhanceSecurityCard from "../../../../../components/enhanceSecurityCard/EnhanceSecurityCard";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./settingsMenu.scss";

interface SettingsMenuProps {
  setIsRightSubDrawerContent: (value: string | null) => void;
}

const SettingsMenu: React.FunctionComponent<SettingsMenuProps> = ({
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="settingsMenu">
      <EnhanceSecurityCard />

      <div className="settingsSection">
        <p className="settingsMenuTitle">Profile</p>
        <MenuListCard
          title="Personal"
          subtitle="Name and contacts"
          icon={<UserIcon />}
          onClick={() => setIsRightSubDrawerContent("personalSettings")}
        />
        <MenuListCard
          title="Two-factor authentication"
          subtitle="Set it up to enhance your security"
          icon={<PhoneIcon />}
          onClick={() => setIsRightSubDrawerContent("twofactor")}
        />
        <MenuListCard
          title="Password"
          subtitle="Keep your account secure"
          icon={<LockIcon />}
          onClick={() => setIsRightSubDrawerContent("change-password")}
        />
      </div>

      <div className="settingsSection">
        <p className="settingsMenuTitle">Setup</p>
        <MenuListCard
          title="Appearance"
          subtitle="Language, themes, and sounds"
          icon={<UserIcon />}
          onClick={() => setIsRightSubDrawerContent("appearance")}
        />
        <MenuListCard
          title="Trading"
          subtitle="Trades, Forex, charts"
          icon={<TradingIcon />}
          onClick={() => setIsRightSubDrawerContent("trading")}
        />
        <MenuListCard
          title="Notifications"
          subtitle="Promos, trading, pushes"
          icon={<NotificationIcon />}
          onClick={() => setIsRightSubDrawerContent("notifications")}
        />
      </div>

      <div className="settingsLogoutButton">
        <MenuListCard danger textCenter title="Log out" icon={<ExitIcon />} />
      </div>
    </div>
  );
};

export default SettingsMenu;

import { Col, Row } from "antd";
import {
  CheckIcon,
  ExitIcon,
  LockIcon,
  NotificationIcon,
  PhoneIcon,
  TradingIcon,
  UserIcon,
} from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
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
      <MainItemCard
        variant={2}
        className="securityEnhancements"
        pointer={false}
      >
        <p className="securityTitle">Enhance your account security</p>
        <p className="securitySubtitle">
          Add extra protection to your account and get a 50% deposit bonus
        </p>
        <Row gutter={[16, 16]} justify="start">
          <Col span={12}>
            <MainItemCard fullHeight className="securityItem">
              <div className="securityItemIcon">
                <PhoneIcon />
              </div>
              <p>Enable two-factor authentication</p>
            </MainItemCard>
          </Col>
          <Col span={12}>
            <MainItemCard fullHeight className="securityItem">
              <div className="securityItemIcon">
                <CheckIcon />
              </div>
              <p>Confirm your email</p>
            </MainItemCard>
          </Col>
        </Row>
      </MainItemCard>

      <div className="settingsSection">
        <p className="settingsMenuTitle">Profile</p>
        <MenuListCard
          title="Personal"
          subtitle="Name and contacts"
          icon={<UserIcon />}
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
        />
      </div>

      <div className="settingsSection">
        <p className="settingsMenuTitle">Setup</p>
        <MenuListCard
          title="Appearance"
          subtitle="Language, themes, and sounds"
          icon={<UserIcon />}
        />
        <MenuListCard
          title="Trading"
          subtitle="Trades, Forex, charts"
          icon={<TradingIcon />}
        />
        <MenuListCard
          title="Notifications"
          subtitle="Promos, trading, pushes"
          icon={<NotificationIcon />}
        />
      </div>

      <div className="settingsLogoutButton">
        <MenuListCard danger textCenter title="Log out" icon={<ExitIcon />} />
      </div>
    </div>
  );
};

export default SettingsMenu;

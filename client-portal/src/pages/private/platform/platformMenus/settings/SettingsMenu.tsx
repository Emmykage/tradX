import { Dispatch, SetStateAction, useState } from "react";
import {
  CheckMark,
  ExitIcon,
  LockIcon,
  NotificationIcon,
  PhoneIcon,
  TradingIcon,
  UserIcon,
} from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./settingsMenu.scss";
import { RightSubDrawerContent } from "../../types";
import Modal from "../../../../../components/modal/Modal";

interface SettingsMenuProps {
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const SettingsMenu: React.FunctionComponent<SettingsMenuProps> = ({
  setIsRightSubDrawerContent,
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className="settingsMenu">
      {/* <EnhanceSecurityCard /> */}
      <div className="settingsSection">
        <p className="settingsMenuTitle">Profile</p>
        <MenuListCard
          title="Personal"
          subtitle="Name and contacts"
          icon={<UserIcon />}
          onClick={() => setIsRightSubDrawerContent("personalSettings")}
        />
        <MenuListCard
          title="Verification"
          subtitle="Full check and identity confirmation"
          icon={<CheckMark />}
          onClick={() => setIsRightSubDrawerContent("verification")}
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
        <MenuListCard
          onClick={() => {
            setModalOpen(true);
          }}
          danger
          textCenter
          title="Log out"
          icon={<ExitIcon />}
        />
      </div>
      <Modal
        closeable={false}
        open={isModalOpen}
        setOpen={setModalOpen}
        rootClassName="logoutModal"
      >
        <p className="modalHeading">Are you sure you want to log out?</p>
        <div className="logout-buttons">
          <div className="settingsLogoutButton">
            <MenuListCard
              onClick={() => setModalOpen(false)}
              variant={2}
              primary
              textCenter
              title="Cancel"
            />
          </div>
          <div className="settingsLogoutButton">
            <MenuListCard
              onClick={() => setModalOpen(false)}
              variant={2}
              danger
              textCenter
              title="Log out"
              icon={<ExitIcon width="20" height="20" />}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SettingsMenu;

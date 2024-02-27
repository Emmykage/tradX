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
        <div
          className="settingsMenuItem"
          onClick={() => setIsRightSubDrawerContent("personalSettings")}
        >
          <UserIcon />
          <div>
            <h2>Personal</h2>
            <p>Name and contacts</p>
          </div>
        </div>
        <div
          className="settingsMenuItem"
          onClick={() => setIsRightSubDrawerContent("verification")}
        >
          <CheckMark />
          <div>
            <h2>Verification</h2>
            <p>Full check and identity confirmation</p>
          </div>
        </div>
        <div
          className="settingsMenuItem"
          onClick={() => setIsRightSubDrawerContent("twofactor")}
        >
          <PhoneIcon />
          <div>
            <h2>Two-factor authentication</h2>
            <p>Set it up to enhance your security</p>
          </div>
        </div>
        <div
          className="settingsMenuItem"
          onClick={() => setIsRightSubDrawerContent("change-password")}
        >
          <LockIcon />
          <div>
            <h2>Password</h2>
            <p>Keep your account secure</p>
          </div>
        </div>
        <p className="settingsMenuTitle2">Setup</p>
        <div
          className="settingsMenuItem"
          onClick={() => setIsRightSubDrawerContent("appearance")}
        >
          <UserIcon />
          <div>
            <h2>Appearance</h2>
            <p>Language, themes, and sounds</p>
          </div>
        </div>
        <div
          className="settingsMenuItem"
          onClick={() => setIsRightSubDrawerContent("trading")}
        >
          <TradingIcon />
          <div>
            <h2>Trading</h2>
            <p>Trades, Forex, charts</p>
          </div>
        </div>
        <div
          className="settingsMenuItem"
          onClick={() => setIsRightSubDrawerContent("notifications")}
        >
          <NotificationIcon />
          <div>
            <h2>Notifications</h2>
            <p>Promos, trading, pushes</p>
          </div>
        </div>
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

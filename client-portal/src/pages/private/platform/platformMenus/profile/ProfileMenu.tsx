import { ReactNode } from "react";
import {
  GiftIcon,
  LargeProfileIcon,
  ReferralLinkIcon,
  SettingsIcon,
} from "../../../../../assets/icons";
import "./profileMenu.scss";
import { useNavigate } from "react-router-dom";

interface ProfileMenuProps {}

const ProfileLink = ({
  icon,
  linkTitle,
  link,
}: {
  icon: ReactNode;
  linkTitle: string;
  link?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="profileLinkContainer" onClick={() => navigate(link || "")}>
      <div className="icon">{icon}</div>
      <p className="linkName">{linkTitle}</p>
    </div>
  );
};

const ProfileMenu: React.FunctionComponent<ProfileMenuProps> = () => {
  return (
    <div>
      <div className="flexTraderProfile">
        <div className="trader">
          <p className="traderHead">Trader</p>
          <p className="traderBottom">
            <span className="id">ID</span>
            <span className="id-number">12345645</span>
          </p>
        </div>
        <div className="bigProfileIcon">
          <LargeProfileIcon />
        </div>
      </div>
      <div className="flexProfileLinks">
        <ProfileLink
          icon={<ReferralLinkIcon />}
          link="/lender"
          linkTitle="See loan offers"
        />
        <ProfileLink icon={<GiftIcon />} linkTitle="Boost cubes" />
      </div>
      <button className="settings">
        <span className="icon">
          <SettingsIcon />
        </span>
        <span className="txt">Settings</span>
      </button>
    </div>
  );
};

export default ProfileMenu;

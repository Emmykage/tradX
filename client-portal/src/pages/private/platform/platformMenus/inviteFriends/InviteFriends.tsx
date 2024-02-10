import { ArrowRightOS, InfoCircleIconWhite } from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./inviteFriends.scss";

interface InviteFriendsProps {}

const InviteFriends: React.FunctionComponent<InviteFriendsProps> = ({}) => {
  return (
    <div>
      <div className="headerExtraIcon">
        <InfoCircleIconWhite />
      </div>
      <div className="InviteFriendsCon">
        <p className="getyourreferaltext">
          Get your referal link in just a few steps
        </p>
        <MainItemCard className="step1Card" variant={2}>
          <div className="textRow">
            <p className="titletext">Step 1 – Deposit</p>
            <p className="subtext">Deposit money to a live account</p>
          </div>
          <div className="rightIconDiv">
            <ArrowRightOS />
          </div>
        </MainItemCard>
        <MainItemCard className="step1Card" variant={2}>
          <div className="textRow">
            <p className="titletext" style={{ color: "#969798" }}>
              Step 1 – Deposit
            </p>
            <p className="subtext">Deposit money to a live account</p>
          </div>
        </MainItemCard>
        <div className="textdiv">
          <p className="referalRewardsText">REFERAL REWARDS</p>
          <p className="megaboxText">MegaBox</p>
        </div>
        <MenuListCard className="listCard" title="What`s Inside?" textCenter />
      </div>
    </div>
  );
};

export default InviteFriends;

import {
  ArrowUpOS,
  BookmarkIcon,
  BoxedCheckedIcon,
  NotificationIcon2,
  ReloadIcon,
  SettingsIcon,
  TooltipIcon,
} from "../../../../../assets/icons";
import "./profileMenu.scss";
import { Col, Row } from "antd";

interface ProfileMenuProps {
  setIsRightSubDrawerOpen: (value: boolean) => void;
  setIsRightSubDrawerContent: (value: string | null) => void;
}

// const ProfileLink = ({
//   icon,
//   linkTitle,
//   link,
// }: {
//   icon: ReactNode;
//   linkTitle: string;
//   link?: string;
// }) => {
//   const navigate = useNavigate();
//   return (
//     <div className="profileLinkContainer" onClick={() => navigate(link || "")}>
//       <div className="icon">{icon}</div>
//       <p className="linkName">{linkTitle}</p>
//     </div>
//   );
// };

const ProfileMenu: React.FunctionComponent<ProfileMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const infos = [
    {
      title: "Recieve a 50% Bonus",
      image: "/profile/50-bonus.png",
    },
    {
      title: "How to analyze the chart",
      image: "/profile/howto-analyze.png",
    },
    {
      title: "Number of the day",
      image: "/profile/number-of-day.png",
    },
  ];

  return (
    <div>
      <div
        className="headerExtraIcon"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("user-notifications");
        }}
      >
        <NotificationIcon2 />
      </div>
      <div className="flexTraderProfile">
        <div className="trader">
          <p className="traderHead">Trader</p>
          <p className="traderBottom">
            <span className="id">ID</span>
            <span className="id-number">12345645</span>
          </p>
        </div>
        <div className="reloadIcon">
          <ReloadIcon />
        </div>
      </div>

      <div className="traderInfoImages">
        <Row gutter={[16, 16]} justify="start">
          {infos.map((item, index) => (
            <Col key={item.title + index} span={8} xs={7} sm={5} md={7}>
              <img src={item.image} alt={item.title} key={index} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="profileCard">
        <div className="levelCard">
          <div className="levelCardTitleContainer">
            <ArrowUpOS />
            <p className="levelCardTitle">Starter</p>
          </div>
          <div className="levelBar">
            <p>LEVEL 1</p>
            <p className="levelText">0/50 XP</p>
          </div>
        </div>
      </div>

      <div className="statusTooltip">
        <p>What are Statuses?</p>
        <TooltipIcon />
      </div>

      <div className="taskCards">
        <Row gutter={[16, 16]} justify="start">
          <Col span={12}>
            <div className="profileCard">
              <div className="taskCard">
                <div className="taskCardIcon">
                  <BoxedCheckedIcon />
                </div>
                <p className="taskCardSubtitle">21:42:37</p>
                <p className="taskCardTitle">Daily Tasks</p>
                <p className="taskCardSubtitle">0/3</p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="profileCard">
              <div className="taskCard">
                <div className="taskCardIcon">
                  <BookmarkIcon />
                </div>
                <p className="taskCardSubtitle"></p>
                <p className="taskCardTitle">Achievements</p>
                <p className="taskCardSubtitle">0/10</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div
        className="profileCard settingsButton"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("settings");
        }}
      >
        <button className="settings">
          <span className="icon">
            <SettingsIcon />
          </span>
          <span className="txt">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;

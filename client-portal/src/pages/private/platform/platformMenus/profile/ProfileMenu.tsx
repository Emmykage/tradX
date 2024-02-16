import { Dispatch, SetStateAction } from "react";
import {
  ArrowUpOS,
  NotificationIcon2,
  ReloadIcon,
  SettingsIcon2,
  TooltipIcon,
} from "../../../../../assets/icons";
import "./profileMenu.scss";
import { Col, Row } from "antd";
import { RightSubDrawerContent } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface ProfileMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
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
      title: "Еconomic",
      p1: "calendar:",
      p2: "12/02-16/02",
      image: "/menu-images/svgs/calender.svg",
      background: "backgroundPurple",
    },
    {
      title: "Discover",
      p1: "Forex Mode",
      image: "/menu-images/svgs/forex-mode.svg",
      background: "backgroundGreen",
    },
    {
      title: "Asset for Fast",
      p1: "Trading 24/7",
      image: "/menu-images/svgs/fast-trade.svg",
      background: "backgroundBlack",
    },
    {
      title: "Join Our",
      p1: "Community",
      image: "/menu-images/svgs/twitter.svg",
      background: "backgroundSky",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    arrows: false,
  };

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
      <div className="traderInfoImages-new">
        <Slider {...settings}>
          {infos.map((item, index) => (
            <div className={`card ${item.background}`} key={item.title + index}>
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="text">
                <p>{item.title}</p>
                <p>{item.p2}</p>
                <p>{item.p1}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="profileCard-set"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("traders-way");
        }}
      >
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
                  <img src="/menu-images/svgs/referal-link.svg" />
                </div>
                <p className="taskCardTitle">Referral Program</p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="profileCard">
              <div className="taskCard">
                <div className="taskCardIcon">
                  <img src="/menu-images/svgs/boost-cubes.svg" />
                </div>
                <p className="taskCardTitle">Boost Cubes</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div
        className="profileCard-set settingsButton"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("settings");
        }}
      >
        <button className="settings">
          <span className="icon">
            <SettingsIcon2 />
          </span>
          <span className="txt">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;

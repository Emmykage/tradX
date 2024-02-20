import { Dispatch, SetStateAction, useState } from "react";
import { Col, Row } from "antd";
import { Story } from "react-insta-stories/dist/interfaces";
import Slider from "react-slick";

import { RightSubDrawerContent } from "../../types";
import {
  ArrowUpOS,
  NotificationIcon2,
  ReloadIcon,
  SettingsIcon2,
  TooltipIcon,
} from "../../../../../assets/icons";
import StoriesModal from "./components/Stories";

import "./profileMenu.scss";

interface ProfileMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const ProfileMenu: React.FunctionComponent<ProfileMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedStories, setSelectedStories] = useState<Story[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);
  const [modalKey, setModalKey] = useState<number>(0);

  const infos = [
    {
      title: "Еconomic",
      p1: "12/02-16/02",
      p2: "calendar:",
      image: "/menu-images/svgs/calender.svg",
      background: "backgroundPurple",
      storiesData: [
        {
          url: "/menu-images/stories/economins-1.jpg",
          duration: 5000,
        },
        {
          url: "/menu-images/stories/economins-2.jpg",
          duration: 5000,
        },
        {
          url: "/menu-images/stories/economins-3.jpg",
          duration: 5000,
        },
        {
          url: "/menu-images/stories/economins-4.jpg",
          duration: 5000,
        },
      ],
    },
    {
      title: "Discover",
      p1: "Forex Mode",
      image: "/menu-images/svgs/forex-mode.svg",
      background: "backgroundGreen",
      storiesData: [
        {
          url: "/menu-images/stories/foremode-1.jpg",
          duration: 5000,
        },
        {
          url: "/menu-images/stories/foremode-2.jpg",
          duration: 5000,
        },
        {
          url: "/menu-images/stories/foremode-3.jpg",
          duration: 5000,
        },
      ],
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
            <div
              className={`card ${item.background}`}
              key={item.title + index}
              onClick={() => {
                if (item?.storiesData) {
                  setModalKey((prevKey) => prevKey + 1);
                  setCurrentStoryIndex(0);
                  setSelectedStories(item?.storiesData as Story[]);
                  setModalOpen(true);
                }
              }}
            >
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="text">
                <p className="textp">{item.title}</p>
                <p className="textp">{item.p2}</p>
                <p className="textp">{item.p1}</p>
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
            <div
              onClick={() => {
                setIsRightSubDrawerOpen(true);
                setIsRightSubDrawerContent("referral-program");
              }}
              className="profileCard"
            >
              <div className="taskCard">
                <div className="taskCardIcon">
                  <img src="/menu-images/svgs/referal-link.svg" />
                </div>
                <p className="taskCardTitle">Referral Program</p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div
              onClick={() => {
                setIsRightSubDrawerOpen(true);
                setIsRightSubDrawerContent("boost-cubes");
              }}
              className="profileCard"
            >
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

      <StoriesModal
        open={modalOpen}
        setOpen={setModalOpen}
        closeable={false}
        stories={selectedStories}
        currentIndex={currentStoryIndex}
        modalKey={modalKey}
      />
    </div>
  );
};

export default ProfileMenu;

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useCookies } from "react-cookie";
import { Story } from "react-insta-stories/dist/interfaces";
import Slider from "react-slick";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { UserSliceState, setUser } from "@store/slices/user";
import useProfile from "api/user/useProfile";

import { RightSubDrawerContent } from "../../types";
import {
  ArrowUpOS,
  NotificationIcon2,
  ReloadIcon,
  SettingsIcon2,
  TooltipIcon,
} from "../../../../../assets/icons";
import StoriesModal from "./components/Stories";
import Loading from "components/loading";
import { StorieList, storiesList } from "./data";

import "./profileMenu.scss";

interface ProfileMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const ProfileMenu: React.FunctionComponent<ProfileMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedStories, setSelectedStories] = useState<Story[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);
  const [modalKey, setModalKey] = useState<number>(0);
  const [stories] = useState<StorieList[]>(storiesList);

  const userRedux = useAppSelector(
    (state: { user: UserSliceState }) => state.user.user
  );
  const userData =
    userRedux && Object.keys(userRedux).length ? userRedux : null;

  const { mutate, isPending } = useProfile({
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
    onError: () => {},
  });

  useEffect(() => {
    if (!userData) {
      mutate(cookies.access_token);
    }
  }, [userData, mutate, cookies.access_token]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    arrows: false,
  };

  if (isPending) {
    return <Loading size="large" tip="loading..." />;
  }

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
          <p className="traderHead">
            {userData?.first_name} {userData?.last_name}
          </p>
          <p className="traderBottom">
            <span className="id">ID</span>
            <span className="id-number">{userData?.trader_id}</span>
          </p>
        </div>
        <div className="reloadIcon">
          <ReloadIcon />
        </div>
      </div>
      <div className="traderInfoImages-new">
        <Slider {...settings}>
          {stories.map((item, index) => (
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

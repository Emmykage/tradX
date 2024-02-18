import {
  ArrowRightOS,
  EventIcon,
  HistoryIcon,
} from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./eventsMenu.scss";

interface EventsMenuProps {}

const EventsMenu: React.FunctionComponent<EventsMenuProps> = () => {
  return (
    <div>
      <div className="eventHistoryIcon" onClick={() => {}}>
        <HistoryIcon />
      </div>
      <div className="eventsContainer">
        <div className="eventsTagLineCon">
          <p className="eventsTagLine">
            Get your referal link in just a few steps
          </p>
        </div>
        <MenuListCard
          title="Leagues"
          subtitle="Join now"
          textCenter
          subTextCenter
        />
        <MainItemCard className="eventMainItemCard" variant={2}>
          <div className="eventMainItemRow">
            <div>
              <EventIcon />
              <div className="eventMainItemTextDiv">
                <p className="happeningNowText">HAPPENING NOW</p>
                <p className="secondText">Exclusive Trading Signals Club</p>
                <div className="thirdTextRow">
                  <p className="endsText">Ends on</p>
                  <p className="dateText">February 26</p>
                </div>
              </div>
            </div>
            <div className="rightIconDiv">
              <ArrowRightOS width="22" height="22" />
            </div>
          </div>
        </MainItemCard>
      </div>
    </div>
  );
};

export default EventsMenu;

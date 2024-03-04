import { TimerIcon4 } from "../../../../../assets/icons";
import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import "./eventsSignalsClub.scss";

const EventsSignalsClub = () => {
  return (
    <div className="eventsSignalsClub">
      <div className="leaguesHeader">
        <div className="coinsDiv">
          <img className="coinsImage" src="/menu-images/svgs/Team.svg" alt="" />
        </div>
        <img
          className="linesImage"
          src="/menu-images/svgs/EventsLines2.svg"
          alt=""
        />
      </div>
      <div className="linearGradient"></div>
      <div className="leaguesBody">
        <h1>Exclusive Trading Signals Club</h1>
        <h2>480,402 PARTICIPANTS</h2>
        <p>
          Real-time signals and expert tips on how to profit during the earnings
          season. Join the club to get exclusive trading alerts from our
          analysts.
        </p>
      </div>
      <div className="timerDiv">
        <TimerIcon4 />
        <h2>ENDS ON FEB 23, 16:59</h2>
      </div>
      <ArrowsSlider>
        <div className="mainSlider">
          <div className="sliderDiv">
            <img src="/menu-images/svgs/NewReports.svg" alt="" />
            <h2>New reports: Week #5 12/02 - 28/02</h2>
          </div>
          <div className="sliderDiv">
            <img src="/menu-images/svgs/ClubCircle.svg" alt="" />
            <h2>Get the most out of the club</h2>
          </div>
          <div className="sliderDiv">
            <img src="/menu-images/svgs/ClubPeople.svg" alt="" />
            <h2>How works the club</h2>
          </div>
          <div className="sliderDiv">
            <img src="/menu-images/svgs/ClubTrading.svg" alt="" />
            <h2>Trading on reports: 3 tips</h2>
          </div>
        </div>
      </ArrowsSlider>
      <PrimaryButton
        className="btnPrime"
        Title="Join for Free"
        onClick={() => {}}
      />
    </div>
  );
};

export default EventsSignalsClub;

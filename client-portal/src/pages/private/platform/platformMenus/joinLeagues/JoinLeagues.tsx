import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import "./joinLeagues.scss";

const JoinLeagues = () => {
  return (
    <div className="joinLeagues">
      <div className="leaguesHeader">
        <div className="coinsDiv">
          <img
            className="coinsImage"
            src="/menu-images/svgs/ThreeCoins2.svg"
            alt=""
          />
        </div>
        <img
          className="linesImage"
          src="/menu-images/svgs/EventsLines2.svg"
          alt=""
        />
      </div>
      <div className="linearGradient"></div>
      <div className="leaguesBody">
        <h2>READY TO CHALLENGE YOURSELF?</h2>
        <h1>Join Leagues</h1>
        <p>
          Earn XP to move up to the next league and get a Boost Cube as a
          reward. You can get XP by making trades using your live account
          and taking part in events.To join Leagues, make a new trade
          on a live account.
        </p>
        <PrimaryButton
          className="btnPrime"
          Title="How Do Leagues Work"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default JoinLeagues;

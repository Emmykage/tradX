import { ArrowUpOS, PlayIcon } from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./tradersWay.scss";

interface TradersWayMenuProps {}

const TradersWayMenu: React.FunctionComponent<TradersWayMenuProps> = () => {
  return (
    <div className="tradersWay">
      <p className="menuText">
        Each status gives you different paths along the Trader's Way. Each path
        consists of several levels you can reach by trading and gaining XP. Each
        level gives you a unique reward. Once you've unlocked all of the levels
        and reached the end, you'll be upgraded to the next status. Your
        progress on the Trader's Way resets every 30 days.
      </p>

      <MenuListCard
        variant={3}
        title="From Starter to Advanced"
        subtitle="Trading Guide"
        icon={<PlayIcon />}
      />

      <div className="timeContainer">
        <p className="timeCountdown">22:02:21:27</p>
        <div className="timeLeftContainer">
          <p className="timeLeftText">
            Time Left until the Current Trader`s Way Stage Ends
          </p>
          <ArrowUpOS />
        </div>
      </div>

      <div className="levelBar">
        <p>LEVEL 1</p>
        <p className="levelText">0/50 XP</p>
      </div>

      <div className="traderOptions">
        <MenuListCard
          textCenter
          title="Barcode"
          icon={<p className="tradesWayOption">1</p>}
        />
        <MenuListCard
          disabled
          textCenter
          title="Kind Martin"
          icon={<p className="tradesWayOption">2</p>}
        />
        <MenuListCard
          disabled
          textCenter
          title="StochRSI"
          icon={<p className="tradesWayOption">3</p>}
        />
      </div>
    </div>
  );
};

export default TradersWayMenu;

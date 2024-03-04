import { TradesIcon3 } from "../../../../../assets/icons";
import "./tradesMenu.scss";
import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";
import { useState } from "react";

interface TradesMenuProps {}

const RenderTab = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [part1, part2] = description.split(" on ");

  return (
    <div className="tradesMenuWrapper">
      <p className="tradeHeading">{title}</p>
      <div className="tradeIconWrapper">
        <TradesIcon3 />
      </div>
      <p className="noTrade">{part1} on</p>
      <p className="noTrade">{part2}</p>
    </div>
  );
};

const items = [
  {
    key: "1",
    tab: "Fixed Time",
    label: "fixed",
    title: "Active Trades",
    des: "You have no open trades on this account",
  },
  {
    key: "2",
    tab: "Forex",
    label: "forex",
    title: "Forex",
    des: "You have no open Forex Trades on this account",
  },
  {
    key: "3",
    tab: "Stocks",
    label: "stocks",
    title: "Stocks",
    des: "You have no open Stock Trades on this account",
  },
  {
    key: "4",
    tab: "Commodities",
    label: "commodities",
    title: "Commodities",
    des: "You have no open Commodities Trades on this account",
  },
  {
    key: "5",
    tab: "Crypto",
    label: "crypto",
    title: "Crypto",
    des: "You have no open Crypto Trades on this account",
  },
  {
    key: "6",
    tab: "Bonds",
    label: "bonds",
    title: "Bonds",
    des: "You have no open Bonds Trades on this account",
  },
  {
    key: "7",
    tab: "IPOs",
    label: "ipos",
    title: "IPOs",
    des: "You have no open IPOs Trades on this account",
  },
];

const TradesMenu: React.FunctionComponent<TradesMenuProps> = () => {
  const [selectedTab, setSelectedTab] = useState("fixed");

  const handleButtonClick = (buttonName: string) => {
    setSelectedTab(buttonName);
  };

  return (
    <div className="tradesMenu">
      <ArrowsSlider>
        <div className="slider">
          {items.map((item) => (
            <button
              className={selectedTab === item.label ? "active" : ""}
              onClick={() => handleButtonClick(item.label)}
            >
              {item.tab}
            </button>
          ))}
        </div>
      </ArrowsSlider>
      <div className="tradesMenuContent">
        {items.map((item) => {
          if (item.label === selectedTab) {
            return <RenderTab title={item.title} description={item.des} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default TradesMenu;

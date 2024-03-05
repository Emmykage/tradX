import {
  DropdownIcon,
  FilterBarsIcon,
  QuestionMarkIcon,
  StarFavouriteIcon,
  TradesIcon3,
} from "../../../../../assets/icons";
import "./tradesMenu.scss";
import ArrowsSlider from "../../../../../components/arrowsSlider/ArrowsSlider";
import { useState } from "react";
import { Col, Row, Select } from "antd";
import SearchBar from "../../../../../components/searchBar/SearchBar";
import { forex } from "../assets/assetsData";

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

const RenderData = () => {
  const [forexData] = useState(forex);
  const [selectedForex, setSelectedForex] = useState(4);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="tradesAssetMenu">
      <p className="tradeHeading">Active Trades</p>;
      <SearchBar className="assetsSearchbar" />
      <div className="assetsFilters">
        <div className="filterButton">
          <StarFavouriteIcon /> Favorites
        </div>
        <Select
          className="filterSelectlist"
          defaultValue="any"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "any", label: "Any profitability" },
            { value: "25", label: "25%" },
            { value: "50", label: "50%" },
            { value: "85", label: "85%" },
            { value: "100", label: "100%" },
          ]}
          suffixIcon={<DropdownIcon />}
          popupClassName="assetsDropdown"
        />
        <Select
          className="filterSelectlist"
          defaultValue="any"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "any", label: "Asset Type" },
            { value: "25", label: "25%" },
            { value: "50", label: "50%" },
            { value: "85", label: "85%" },
            { value: "100", label: "100%" },
          ]}
          suffixIcon={<DropdownIcon />}
          popupClassName="assetsDropdown"
        />
      </div>
      <Row className="assetsList" gutter={[2, 2]} justify="start">
        <Col span={12} className="assetsListCol">
          <div className="assetsColIcon barsIcon">
            <FilterBarsIcon />
          </div>
          <p className="assetsListColTitle">Name, Mid Price</p>
        </Col>

        <Col span={12} className="assetsListCol alignEnd">
          <p className="assetsListColTitle">24-hr changes</p>
        </Col>

        {forexData.map((item, index) => (
          <Col span={24} key={`assetListItem ${item.value + "_" + index}`}>
            <div
              className={`assetsListItem ${
                selectedForex === item.value ? "active" : ""
              }`}
              onClick={() => setSelectedForex(item.value)}
            >
              <div className="contentLeft">
                <img src={item.image} />
                <p className="itemTitle">{item.name}</p>
              </div>
              <div className="contentRight">
                <p
                  className={`itemText ${
                    item?.inProfit ? "success" : "danger"
                  }`}
                >
                  {item.profit}%
                </p>
                <QuestionMarkIcon />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const RenderFixedTime = () => (
  // <RenderTab
  //   title="Active Trades"
  //   description="You have no open trades on this account"
  // />
  <RenderData />
);
const RenderForex = () => (
  <RenderTab
    title="Forex"
    description="You have no open Forex Trades on this account"
  />
);
const RenderStocks = () => (
  <RenderTab
    title="Stocks"
    description="You have no open Stock Trades on this account"
  />
);
const RenderCommodities = () => (
  <RenderTab
    title="Commodities"
    description="You have no open Commodity Trades on this account"
  />
);
const RenderCrypto = () => (
  <RenderTab
    title="Crypto"
    description="You have no open Crypto Trades on this account"
  />
);
const RenderBonds = () => (
  <RenderTab
    title="Bonds"
    description="You have no open Bond Trades on this account"
  />
);
const RenderIPOs = () => (
  <RenderTab
    title="IPOs"
    description="You have no open IPO Trades on this account"
  />
);

const items = [
  {
    key: "1",
    tab: "Fixed Time",
    label: "fixed",
    component: RenderFixedTime,
  },
  {
    key: "2",
    tab: "Forex",
    label: "forex",
    component: RenderForex,
  },
  {
    key: "3",
    tab: "Stocks",
    label: "stocks",
    component: RenderStocks,
  },
  {
    key: "4",
    tab: "Commodities",
    label: "commodities",
    component: RenderCommodities,
  },
  {
    key: "5",
    tab: "Crypto",
    label: "crypto",
    component: RenderCrypto,
  },
  {
    key: "6",
    tab: "Bonds",
    label: "bonds",
    component: RenderBonds,
  },
  {
    key: "7",
    tab: "IPOs",
    label: "ipos",
    component: RenderIPOs,
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
            const TabComponent = item.component;
            return <TabComponent />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default TradesMenu;

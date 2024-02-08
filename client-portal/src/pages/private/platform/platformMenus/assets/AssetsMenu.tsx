import { Col, Row, Select } from "antd";
import SearchBar from "../../../../../components/searchBar/SearchBar";
import Tabs from "./Tabs";
import "./assetsMenu.scss";
import {
  DropdownIcon,
  FilterBarsIcon,
  InfoCircleIconSmall,
  QuestionMarkIcon,
} from "../../../../../assets/icons";
import { useState } from "react";
import { forex, stocks, times } from "./assetsData";

interface AssetsMenuProps {}

const AssetsMenu: React.FunctionComponent<AssetsMenuProps> = () => {
  const [timesData] = useState(times);
  const [forexData] = useState(forex);
  const [stocksData] = useState(stocks);

  const [selectedTab, setSelectedTab] = useState("fixed");
  const [timezone, setTimezone] = useState(4);
  const [selectedForex, setSelectedForex] = useState(4);
  const [selectedStock, setSelectedStock] = useState(0);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="assetsMenu">
      <Tabs
        data={[
          { value: "fixed", title: "Fixed Time" },
          { value: "forex", title: "Forex" },
          { value: "stocks", title: "Stocks" },
        ]}
        defaultSelected={selectedTab}
        onClick={(value) => setSelectedTab(value)}
      />

      <SearchBar className="assetsSearchbar" />

      <div className="assetsFilters">
        <div className="filterButton">Favorites</div>
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
      </div>

      {selectedTab === "fixed" ? (
        <Row className="assetsList" gutter={[2, 2]} justify="start">
          <Col span={12} className="assetsListCol">
            <div className="assetsColIcon barsIcon">
              <FilterBarsIcon />
            </div>
            <p className="assetsListColTitle">Name</p>
          </Col>

          <Col span={12} className="assetsListCol alignEnd">
            <p className="assetsListColTitle">Profitability</p>
            <div className="assetsColIcon questionIcon">
              <QuestionMarkIcon />
            </div>
          </Col>

          {timesData.map((item, index) => (
            <Col span={24} key={`assetListItem ${item.value + "_" + index}`}>
              <div
                className={`assetsListItem ${
                  timezone === item.value ? "active" : ""
                }`}
                onClick={() => setTimezone(item.value)}
              >
                <div className="contentLeft">
                  <img src={item.image} />
                  <div>
                    <p className="itemTitle">{item.name}</p>
                    {item?.quickTrading ? (
                      <p className="itemSubtext">5 Second Trading</p>
                    ) : null}
                  </div>
                </div>
                <div className="contentRight">
                  <p className={`itemText ${item?.inProfit ? "primary" : ""}`}>
                    {item.profit}%
                  </p>
                  <QuestionMarkIcon />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : selectedTab === "forex" ? (
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
      ) : selectedTab === "stocks" ? (
        <Row className="assetsList" gutter={[2, 2]} justify="start">
          <Col span={12} className="assetsListCol">
            <div className="assetsColIcon barsIcon">
              <FilterBarsIcon />
            </div>
            <p className="assetsListColTitle">Name</p>
          </Col>

          <Col span={12} className="assetsListCol alignEnd">
            <p className="assetsListColTitle">Ask Price</p>
            <div className="assetsColIcon questionIcon">
              <QuestionMarkIcon />
            </div>
          </Col>

          {stocksData.map((item, index) => {
            const disabled = !!item.value;

            return (
              <Col span={24} key={`assetListItem ${item.value + "_" + index}`}>
                <div
                  className={`assetsListItem ${
                    selectedStock === item.value ? "active" : ""
                  } ${disabled ? "disabled" : ""}`}
                  onClick={() =>
                    setSelectedStock(!disabled ? item.value : selectedStock)
                  }
                >
                  <div className="contentLeft">
                    <img src={item.image} />
                    <div>
                      <p className="itemTitle">{item.name}</p>
                      {disabled ? (
                        <p className="itemSubtext">Closed until Jan25, 09:35</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="contentRight">
                    <p className="itemText">{item.profit}</p>
                    <InfoCircleIconSmall />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      ) : null}
    </div>
  );
};

export default AssetsMenu;

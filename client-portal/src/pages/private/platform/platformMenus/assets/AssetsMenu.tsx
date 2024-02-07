import { Col, Row, Select } from "antd";
import SearchBar from "../../../../../components/searchBar/SearchBar";
import Tabs from "./Tabs";
import "./assetsMenu.scss";
import {
  DropdownIcon,
  FilterBarsIcon,
  QuestionMarkIcon,
} from "../../../../../assets/icons";

interface AssetsMenuProps {}

const AssetsMenu: React.FunctionComponent<AssetsMenuProps> = () => {
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

      <Row className="assetsList" gutter={[16, 16]} justify="start">
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
      </Row>
    </div>
  );
};

export default AssetsMenu;

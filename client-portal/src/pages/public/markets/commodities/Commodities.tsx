import "./Commodities.scss";
import Navbar from "pages/public/home/navbar/Navbar";
import CommoditiesUpDown from "./commoditiesUpDown/CommoditiesUpDown";
import CommodityStocks from "./commodityStocks/CommodityStocks";

const Commodities = () => {
  return (
    <div className="commoditiesContainer">
      <Navbar />
      <CommoditiesUpDown />
      <CommodityStocks />
    </div>
  );
};

export default Commodities;

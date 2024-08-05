import CheckCurrency from "../home/checkCurrency/CheckCurrency";
import Navbar from "../home/navbar/Navbar";
import CommoditiesUpDown from "./commoditiesUpDown/CommoditiesUpDown";
import "./Markets.scss";

const Markets = () => {
  return (
    <div className="marketsContainer">
      <Navbar />
      <CommoditiesUpDown />
    </div>
  );
};

export default Markets;

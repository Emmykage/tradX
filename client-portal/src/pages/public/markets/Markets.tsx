import "./Markets.scss";
import Bonds from "./bonds/Bonds";
import Commodities from "./commodities/Commodities";
import Etf from "./etf/Etf";
import Indices from "./indices/Indices";
import { Ipo } from "./ipo/Ipo";
import Shares from "./shares/Shares";

const Markets = () => {
  return (
    <div className="marketsContainer">
      <Commodities />
      {/* <Shares /> */}
      {/* <Indices /> */}
      {/* <Etf /> */}
      {/* <Bonds /> */}
      {/* <Ipo /> */}
    </div>
  );
};

export default Markets;

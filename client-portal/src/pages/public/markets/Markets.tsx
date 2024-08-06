import Indices from "./indices/Indices";
import "./Markets.scss";

const Markets = () => {
  return (
    <div className="marketsContainer">
      {/* <Commodities /> */}
      {/* <Shares /> */}
      <Indices />
    </div>
  );
};

export default Markets;

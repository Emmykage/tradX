import "./CFDTrading.scss";
import MainImg from "./main.png";

const CfdTradingBlock = () => {
  return (
    <div className="cfdTradingContainer">
      <div>
        <h2>CFD Trading</h2>
        <span>
          Take a position on thousands of global markets by trading CFDs on
          shares, indices, forex, commodities, bonds and cryptocurrencies. Join
          us for a total trading experience with a powerful multi-asset
          platform, low costs and expert support.
        </span>
        <button>Start Trading</button>
      </div>
      <img src={MainImg} alt="" />
    </div>
  );
};

export default CfdTradingBlock;

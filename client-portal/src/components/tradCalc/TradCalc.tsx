import "./TradCalc.scss";

import ArrowDownSvg from "../../assets/markets/arrowDown.svg";
import MinusSvg from "../../assets/markets/minus.svg";
import PlusSvg from "../../assets/markets/plusRound.svg";
import { FC, useState } from "react";
import { data } from "./data";
import { HeaderTradCalc } from "./header/HeaderTradCalc";

interface TradCalcProps {
  titleHeader?: string;
}

const TradCalc: FC<TradCalcProps> = ({ titleHeader }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isBuy, setBuy] = useState<boolean>(false);

  const hundleQuantity = (isMinus: boolean) => {
    quantity > 0 && setQuantity((prev) => (isMinus ? prev - 1 : prev + 1));
  };

  const hundleAction = () => {
    setBuy(!isBuy);
  };

  return (
    <div className="tradCalcContainer">
      <HeaderTradCalc titleHeader={titleHeader} />
      <div className={`tradCalcMainBlock ${titleHeader ? "mt-100" : "mt-0"}`}>
        <div className="tradCalcFirst">
          <div>
            <h3>Choose your points of movement</h3>
            <span>
              Сalculate your hypothetical P/L (aggregated cost and charges) if
              you had opened a trade today.
            </span>
          </div>

          <div className="tradCalcItemsLine">
            <div className="tradCalcItemAction">
              <label>Action</label>
              <div>
                <span
                  onClick={hundleAction}
                  className={`${
                    !isBuy ? "tradCalcActionActive" : "tradCalcNotActive"
                  }`}
                >
                  Sell
                </span>
                <span
                  onClick={hundleAction}
                  className={`${
                    isBuy ? "tradCalcActionActive" : "tradCalcNotActive"
                  }`}
                >
                  Buy
                </span>
              </div>
            </div>
            <div className="tradCalcItemQuantity">
              <label>Quantity</label>
              <span>{quantity}</span>
              <img
                className="tradCalcMinus"
                src={MinusSvg}
                alt=""
                onClick={() => hundleQuantity(true)}
              />
              <img
                className="tradCalcPlus"
                src={PlusSvg}
                alt=""
                onClick={() => hundleQuantity(false)}
              />
            </div>
          </div>

          <div className="tradCalcItemsLine">
            <div className="tradCalcItem">
              <label>Market</label>
              {/* <input value={"Commodity"} /> */}
              <button>Commodity</button>
              <img className="tradCalcArrDown" src={ArrowDownSvg} alt="" />
            </div>
            <div className="tradCalcItem">
              <label>Asset</label>
              <button>Gold</button>
              <img className="tradCalcArrDown" src={ArrowDownSvg} alt="" />
            </div>
          </div>

          <button className="tradCalcButtonSubmit">Calculate</button>
        </div>

        <div className="tradCalcSecond">
          <div className="tradCalcEUR">
            EUR
            <img className="tradCalcArrDown" src={ArrowDownSvg} alt="" />
          </div>
          <div className="tradCalcEuro">
            {data &&
              data.map((item, index) => (
                <div key={index + item.title}>
                  <span>{item.title}</span>
                  {item.img ? <img src={item.img} alt="" /> : <p>-</p>}
                </div>
              ))}
          </div>
          <button>Start Trading</button>
          <span>
            *Past performance is not a reliable indicator of future results.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TradCalc;

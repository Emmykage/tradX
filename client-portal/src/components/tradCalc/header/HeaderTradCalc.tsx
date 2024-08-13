import { FC } from "react";
import "./HeaderTradCalc.scss";

interface HeaderTradCalcProps {
  titleHeader?: string;
  withRoute?: boolean
}

const items = [
  "CFD Trading Calculator",
  "Commodities Profit Calculator",
  "Forex Profit Calculator",
  "Forex Margin Calculator",
];

export const HeaderTradCalc: FC<HeaderTradCalcProps> = ({ titleHeader, withRoute }) => {
  return (
    <div className="headerTradCalcContainer">
      {withRoute ? (
        <div className="headerTradCalcItems">
          <h2>{titleHeader}</h2>
          <div className="headerTradCalcItem">
            {items.map((item, index) => (
              <span
                className={titleHeader === item ? "headerTradActive" : ""}
                key={index + item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <h2>CFD Trading Calculator</h2>
      )}
    </div>
  );
};

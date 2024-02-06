import Toggle from "../../../../../components/toggle/Toggle";
import "./tradingMenu.scss";

interface TradingMenuProps {}

const TradingMenu: React.FunctionComponent<TradingMenuProps> = () => {
  return (
    <div className="tradingMenu">
      <div className="tradingMenuSection">
        <p className="tradingSectionTitle">Chart</p>
        <Toggle
          label="Strike prices"
          subtext="Show strike prices on the chart"
          defaultChecked
        />
        <Toggle
          label="Indicators"
          subtext="Show a list of indicators"
          defaultChecked
        />
        <Toggle
          label="Chart types"
          subtext="Show a switch between chart types"
          defaultChecked
        />
      </div>

      <div className="tradingMenuSection">
        <p className="tradingSectionTitle">Accounts</p>
        <Toggle
          label="Hidden balances"
          subtext="Hide your live account balances"
          defaultChecked
          infoText="Learn More"
          onClickInfo={() => {}}
        />
      </div>

      <div className="tradingMenuSection">
        <p className="tradingSectionTitle">Trades</p>
        <Toggle
          label="1-click trade"
          subtext="Open trades without confirmation"
        />
        <Toggle
          label="1-click closing"
          subtext="Close trades without confirmation"
          defaultChecked
        />
      </div>
    </div>
  );
};

export default TradingMenu;

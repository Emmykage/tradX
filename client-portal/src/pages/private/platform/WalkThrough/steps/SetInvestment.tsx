import { useEffect, useState } from "react";
import TradeForm from "../../../../../components/tradeForm/TradeForm";
import ChartComponent from "../components/WalkthroughChart";
import { staticData } from "../data/initialGraphData";

interface SetInvestmentProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
}

const SetInvestment: React.FC<SetInvestmentProps> = ({
  className,
  setStep,
  open,
}) => {
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    <div className={`walkthroughStep setInvestmentStep ${className}`}>
      <div className="setInvestmentStepLeft">
        <div className="graphContainerWalkthrough">
          {graphData?.length && <ChartComponent data={graphData} />}
          <div className="graphOverlay"></div>
        </div>
        <img
          className="euroUsdButton active"
          src="/walkthrough/eur-usd-btn-2.png"
        />
      </div>
      <div className="tradingForm">
        <TradeForm
          defaultAmount="90"
          defaultDuration="2 min"
          coinInfo={false}
          showProfit={false}
          showSetupOrder={false}
          amountTooltip={open}
          profitPercent="+85%"
          hintPlus
          disabled
          onIncreaseAmount={() => setStep(8)}
        />
      </div>
    </div>
  );
};

export default SetInvestment;

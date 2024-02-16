import { useEffect, useState } from "react";
import TradeForm from "../../../../../components/tradeForm/TradeForm";
import ChartComponent from "../components/WalkthroughChart";
import { staticData } from "../data/initialGraphData";

interface ChooseTradeProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
}

const ChooseTrade: React.FC<ChooseTradeProps> = ({
  className,
  setStep,
  open,
}) => {
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);
  return (
    <div className={`walkthroughStep chooeseTradeStep ${className}`}>
      <div className="chooeseTradeStepLeft">
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
          defaultAmount="100"
          defaultDuration="1 min"
          coinInfo={false}
          showProfit={false}
          showSetupOrder={false}
          hintTradesTooltip={open}
          hintTrades
          disabled
          //   onDecreaseDuration={() => setStep(9)}
        />
      </div>
    </div>
  );
};

export default ChooseTrade;

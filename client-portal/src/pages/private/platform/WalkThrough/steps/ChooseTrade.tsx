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
  const [userInput, setUserInput] = useState<"up" | "down" | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [time, setTime] = useState(60);
  const [displayTimer, setDisplayTimer] = useState(false);

  useEffect(() => {
    setShowTooltip(open);
  }, [open]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  useEffect(() => {
    if (displayTimer && time > 0) {
      const timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 230);

      if (time === 0) {
        setDisplayTimer(false);
      }

      // Cleanup interval on component unmount or when time reaches 0
      return () => clearInterval(timerInterval);
    }
  }, [displayTimer, time]);

  return (
    <div className={`walkthroughStep chooeseTradeStep ${className}`}>
      <div className="chooeseTradeStepLeft">
        <div className="graphContainerWalkthrough">
          {graphData?.length && (
            <ChartComponent data={graphData} direction={userInput} />
          )}
          <div className="graphOverlay"></div>
        </div>
        <img
          className="euroUsdButton active"
          src="/walkthrough/eur-usd-btn-2.png"
        />
        <div
          className={`timeCounter ${displayTimer && time > 0 ? "active" : ""}`}
        >
          <p>Wait for the result of the trade ({time}).</p>
        </div>
      </div>
      <div className="tradingForm">
        <TradeForm
          defaultAmount="100"
          defaultDuration="1 min"
          coinInfo={false}
          showProfit={false}
          showSetupOrder={false}
          hintTradesTooltip={showTooltip}
          hintTrades={showTooltip}
          disabled
          handleUserInputUp={() => {
            setDisplayTimer(true);
            setStep(10);
            setUserInput("up");
            setShowTooltip(false);
          }}
          handleUserInputDown={() => {
            setDisplayTimer(true);
            setStep(10);
            setUserInput("down");
            setShowTooltip(false);
          }}
        />
      </div>
    </div>
  );
};

export default ChooseTrade;


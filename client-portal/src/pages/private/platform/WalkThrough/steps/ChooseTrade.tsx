import { useEffect, useState } from "react";
import TradeForm from "../../../../../components/tradeForm/TradeForm";
import ChartComponent from "../components/WalkthroughChart";
import { staticData } from "../data/initialGraphData";

interface ChooseTradeProps {
  className: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
  setShowWalkThrough: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChooseTrade: React.FC<ChooseTradeProps> = ({
  className,
  setStep,
  open,
  setShowWalkThrough,
}) => {
  const [graphData, setGraphData] = useState<any>([]);
  const [userInput, setUserInput] = useState<"up" | "down" | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [time, setTime] = useState(60);
  const [displayTimer, setDisplayTimer] = useState(false);
  const [tradingCompleted, setTradingCompleted] = useState(false);

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

        if (time <= 1) {
          setTradingCompleted(true);
          setDisplayTimer(false);
          setStep(11);
        }
      }, 230);

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
        <div className={`timeCounter ${displayTimer ? "active" : ""}`}>
          <p>Wait for the result of the trade ({time}).</p>
        </div>

        <div className={`tradingCompleted ${tradingCompleted ? "active" : ""}`}>
          <p className="walkthroughSubtext">
            Congratulations! Your trade was successful. By Investing $100,
            you’ve earned $85 - a 85% return in just 1 minute.
          </p>

          <button
            className="walkthroughButton"
            onClick={() => {
              setShowWalkThrough(false);
              setStep(0);
              localStorage.setItem("walkthroughSkipped", "true");
            }}
          >
            Finish training
          </button>
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
          profitPercent="+85%"
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

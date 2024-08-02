import { useEffect, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import TestWalkThrough from "components/welcomeSteps/components/modal/TestWalkThrough";
import { staticData } from "components/welcomeSteps/data/initialGraphData";
import ChartComponent from "components/welcomeSteps/components/WalkthroughChart";


interface StepTenProps {
  className: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onSkipWalkthrough: () => void;
  tradeFormHeight: number;
}

const StepTen: React.FC<StepTenProps> = ({
  className,
  step,
  setStep,
  tradeFormHeight,
  onSkipWalkthrough,
}) => {
  const [graphData, setGraphData] = useState<any>([]);
  const [userInput, setUserInput] = useState<"up" | "down" | null>(null);
  const [time, setTime] = useState(6);
  const [displayTimer, setDisplayTimer] = useState(true);
  const [tradingCompleted, setTradingCompleted] = useState(false);

  const calculateChartHeight = () => {
    return `calc(100% - ${tradeFormHeight}px)`;
  };
  const { t } = useTranslation();

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  useEffect(() => {
    if (displayTimer && time > 0) {
      const timerInterval = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);

        if (time <= 1) {
          setTradingCompleted(true);
          setDisplayTimer(false);
          setStep(11);
        }
      }, 230);

      return () => clearTimeout(timerInterval);
    }
  }, [displayTimer, time]);

  return (
    <div className={`walkthroughStep welcomeStepSeven chooeseTradeStep ${className}`}>
      <div
        className="chooeseTradeStepLeft"
        style={{ height: calculateChartHeight() }}
      >
        <div className="graphContainerWalkthrough">
          {graphData?.length && (
            <ChartComponent data={graphData} direction={userInput} />
          )}
          <div className="graphOverlay"></div>
        </div>
        <div className={`timeCounter ${displayTimer ? "active" : ""}`}>
          <p>{t("walkthroughChooseTrade", { time })}</p>
        </div>

        <div className={`tradingCompleted ${tradingCompleted ? "active" : ""}`}>
          <p className="walkthroughSubtext">
            {t("walkthroughChooseTradeSubText")}
          </p>

          <button className="walkthroughButton" onClick={onSkipWalkthrough}>
            {t("finishTrading")}
          </button>
        </div>
      </div>
      <div className="modal">
        <TestWalkThrough setStep={setStep} step={step} />
      </div>
    </div>
  );
};

export default withTranslation()(StepTen);

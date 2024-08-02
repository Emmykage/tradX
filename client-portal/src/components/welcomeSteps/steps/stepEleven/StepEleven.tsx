import { useEffect, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import TestWalkThrough from "components/welcomeSteps/components/modal/TestWalkThrough";
import { staticData } from "components/welcomeSteps/data/initialGraphData";
import ChartComponent from "components/welcomeSteps/components/WalkthroughChart";
import MyButton from "components/UI/buttons/MyButton";

interface StepElevenProps {
  className: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  tradeFormHeight: number;
}

const StepEleven: React.FC<StepElevenProps> = ({
  className,
  step,
  setStep,
  tradeFormHeight,
}) => {
  const [graphData, setGraphData] = useState<any>([]);

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  const calculateChartHeight = () => {
    return `calc(100% - ${tradeFormHeight}px)`;
  };
  const { t } = useTranslation();

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    <div className={`walkthroughStep welcomeStepSeven chooeseTradeStep ${className}`}>
      <div
        className="chooeseTradeStepLeft"
        style={{ height: calculateChartHeight() }}
      >
        <div className={`walkthroughStep theChartsStep active`}>
          <div className="graphContainerWalkthrough">
            {graphData?.length && <ChartComponent data={graphData} />}
            <div className="graphOverlay"></div>
          </div>
          <p className="walkthroughSubtext">{t("walkthroughChooseTradeSubText")}</p>

          <div className="button">
            <MyButton text="finishTrading" handleClick={handleClick} />
          </div>
        </div>
      </div>
      <div className="modal">
        <TestWalkThrough setStep={setStep} step={step} />
      </div>
    </div>
  );
};

export default withTranslation()(StepEleven);

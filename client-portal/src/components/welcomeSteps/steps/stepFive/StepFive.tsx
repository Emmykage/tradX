import MyButton from "components/UI/buttons/MyButton";
import "./StepFive.scss";
import { useTranslation } from "react-i18next";
import { FC, useEffect, useState } from "react";
import Background from "components/welcomeSteps/components/background/Background";
import { staticData } from "components/welcomeSteps/data/initialGraphData";
import ChartComponent from "components/welcomeSteps/components/WalkthroughChart";

interface StepFiveProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepFive: FC<StepFiveProps> = ({ setStep, step }) => {
  const [graphData, setGraphData] = useState<any>([]);
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    // <div className="welcomeStepFive">
    //   <div className="background">
    //     <Background step={step} />
    //   </div>
    //   <div className="info">
    //     <div className="text">{t("walkthroughFixedDurationOffer")}</div>
    //     <div className="button">
    //       <MyButton text="next" handleClick={handleClick} />
    //     </div>
    //   </div>
    // </div>

    <div className={`walkthroughStep theChartsStep active`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
        <div className="graphOverlay"></div>
      </div>
      <p className="walkthroughSubtext">{t("walkthroughFixedDurationOffer")}</p>

      <div className="button">
        <MyButton text="next" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default StepFive;

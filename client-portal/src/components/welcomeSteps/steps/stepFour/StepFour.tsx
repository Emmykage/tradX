import MyButton from "components/UI/buttons/MyButton";
import "./StepFour.scss";
import { useTranslation } from "react-i18next";
import { FC, useEffect, useState } from "react";
import Background from "components/welcomeSteps/components/background/Background";
import { staticData } from "components/welcomeSteps/data/initialGraphData";
import ChartComponent from "components/welcomeSteps/components/WalkthroughChart";

interface StepFourProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepFour: FC<StepFourProps> = ({ setStep, step }) => {
  const { t } = useTranslation();
  const [graphData, setGraphData] = useState<any>([]);

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    // <div className="welcomeStepFour">
    //   <div className="background">
    //     <Background step={step} />
    //   </div>
    //   <div className="info">
    //     <div className="text">{t("walkthroughForeCastSubText")}</div>
    //     <div className="button">
    //       <MyButton text="next" handleClick={handleClick} />
    //     </div>
    //   </div>
    // </div>

    <div className={`walkthroughStep forecastStep active`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
        <div className="graphOverlay"></div>
      </div>
      <p className="walkthroughSubtext">{t("walkthroughForeCastSubText")}</p>

      <div className="button">
        <MyButton text="next" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default StepFour;

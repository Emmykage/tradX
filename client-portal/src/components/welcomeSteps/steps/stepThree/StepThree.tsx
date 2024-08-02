import MyButton from "components/UI/buttons/MyButton";
import "./StepThree.scss";
import { useTranslation } from "react-i18next";
import { FC, useEffect, useState } from "react";
import Background from "../../components/background/Background";
import { staticData } from "../../data/initialGraphData";
import ChartComponent from "components/welcomeSteps/components/WalkthroughChart";

interface StepThreeProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepThree: FC<StepThreeProps> = ({ setStep, step }) => {
  const { t } = useTranslation();
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className="welcomeStepThree">
      <div className="background">
        <Background step={step} />
      </div>
      <div className="info">
        <div className="text">{t("walkthroughChartsSubText")}</div>
        <div className="button">
          <MyButton text="next" handleClick={handleClick} />
        </div>
      </div>
    </div>

    // <div className={`walkthroughStep theChartsStep active`}>
    //   <div className="graphContainerWalkthrough">
    //     {graphData?.length && <ChartComponent data={graphData} />}
    //     <div className="graphOverlay"></div>
    //   </div>
    //   <img className="euroUsdButton" src="/walkthrough/eur-usd-btn.png" />
    //   <p className="walkthroughSubtext">{t("walkthroughChartsSubText")}</p>

    //   <div className="button">
    //     <MyButton text="next" handleClick={handleClick} />
    //   </div>
    // </div>
  );
};

export default StepThree;

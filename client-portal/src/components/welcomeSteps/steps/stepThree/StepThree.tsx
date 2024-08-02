import MyButton from "components/UI/buttons/MyButton";
import "./StepThree.scss";
import { useTranslation, withTranslation } from "react-i18next";
import { FC, useEffect, useState } from "react";
import { staticData } from "../../data/initialGraphData";
import ChartComponent from "components/welcomeSteps/components/WalkthroughChart";

interface StepThreeProps {
  className: string;
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepThree: FC<StepThreeProps> = ({ setStep, className, step }) => {
  const { t } = useTranslation();
  const [graphData, setGraphData] = useState<any>([]);

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className={`walkthroughStep theChartsStep ${className}`}>
      <div className="graphContainerWalkthrough">
        {graphData?.length && <ChartComponent data={graphData} />}
        <div className="graphOverlay"></div>
      </div>
      <p className="walkthroughSubtext">{t("walkthroughChartsSubText")}</p>

      <div className="button">
        <MyButton text="next" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default withTranslation()(StepThree);

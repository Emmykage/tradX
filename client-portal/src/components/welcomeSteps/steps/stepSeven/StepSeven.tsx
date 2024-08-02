import "./StepSeven.scss";
import { FC, useEffect, useState } from "react";
import TestWalkThrough from "../../components/modal/TestWalkThrough";
import { useTranslation } from "react-i18next";
import { staticData } from "components/welcomeSteps/data/initialGraphData";
import ChartComponent from "components/welcomeSteps/components/WalkthroughChart";
interface StepSevenProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepSeven: FC<StepSevenProps> = ({
  step,
  setStep,
}) => {
  const [graphData, setGraphData] = useState<any>([]);
  const { t } = useTranslation();

  useEffect(() => {
    setGraphData(staticData);
  }, []);

  return (
    // <div className="welcomeStepSeven">
    //   <Background step={step} />

    //   <div className="modal">
    //     <TestWalkThrough setStep={setStep} step={step} />
    //   </div>
    // </div>

    <div
      className={`walkthroughStep welcomeStepSeven setInvestmentStep active`}
    >
      <div
        className="setInvestmentStepLeft"
      >
        <div className="graphContainerWalkthrough">
          {graphData?.length && <ChartComponent data={graphData} />}
          <div className="graphOverlay"></div>
        </div>
      </div>
      <div className="modal">
        <TestWalkThrough setStep={setStep} step={step} />
      </div>
    </div>
  );
};

export default StepSeven;

import Background from "components/welcomeSteps/components/background/Background";
import "./StepSix.scss";
import { FC } from "react";
import { AreaChart } from "pages/private/platform/MainChart/AreaChart";

interface StepSixProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
  chartData: any;
}

const StepSix: FC<StepSixProps> = ({ step, chartData }) => {
  return (
    <div className="welcomeStepSix">
      <AreaChart chartData={chartData}/>
      {/* <div className="background">
        <Background step={step} />
      </div> */}
    </div>
  );
};

export default StepSix;

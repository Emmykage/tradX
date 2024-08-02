import Background from "components/welcomeSteps/components/background/Background";
import "./StepSix.scss";
import { FC } from "react";

interface StepSixProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepSix: FC<StepSixProps> = ({ step }) => {
  return (
    <div className="welcomeStepSix">
      <div className="background">
        <Background step={step} />
      </div>
    </div>
  );
};

export default StepSix;

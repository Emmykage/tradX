import "./StepSix.scss";
import { FC } from "react";
import Background from "../background/Background";

interface StepSixProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number
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

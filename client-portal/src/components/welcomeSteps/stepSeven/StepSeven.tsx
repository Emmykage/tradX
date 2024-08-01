import "./StepSeven.scss";
import { FC } from "react";
import Background from "../background/Background";
import TestWalkThrough from "../modal/TestWalkThrough";

interface StepSevenProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepSeven: FC<StepSevenProps> = ({ step, setStep }) => {
  return (
    <div className="welcomeStepSeven">
      <div className="background">
        <Background step={step} />
      </div>

      <div className="modal">
        <TestWalkThrough setStep={setStep} step={step} />
      </div>
    </div>
  );
};

export default StepSeven;

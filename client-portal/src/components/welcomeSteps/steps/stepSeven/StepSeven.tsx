import "./StepSeven.scss";
import { FC } from "react";
import Background from "../../components/background/Background";
import TestWalkThrough from "../../components/modal/TestWalkThrough";
interface StepSevenProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepSeven: FC<StepSevenProps> = ({ step, setStep }) => {
  return (
    <div className="welcomeStepSeven">
      <Background step={step} />

      <div className="modal">
        <TestWalkThrough setStep={setStep} step={step} />
      </div>
    </div>
  );
};

export default StepSeven;

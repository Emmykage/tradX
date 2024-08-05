import "./StepSeven.scss";
import { FC } from "react";
import Background from "../../components/background/Background";
import TestWalkThrough from "../../components/modal/TestWalkThrough";
interface StepSevenProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
  setTrade?: (trade: string | ((prevTrade: string) => string)) => void;
  trade?: string;
}

const StepSeven: FC<StepSevenProps> = ({ step, setStep,trade,setTrade }) => {
  return (
    <div className="welcomeStepSeven">
      <Background step={step} />
      <div className="modalSevenContainer">

      <div className="modal">
        <TestWalkThrough setStep={setStep} step={step} trade={trade} setTrade={setTrade} />
      </div>
      </div>
    </div>
  );
};

export default StepSeven;

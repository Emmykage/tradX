import { useState } from "react";
import { CloseIcon } from "../../../../assets/icons";
import "./walkThrough.scss";
import "./steps/steps.scss";
import Welcome from "./steps/Welcome";
import Stocks from "./steps/Stocks";
import TheCharts from "./steps/TheCharts";
import ForeCast from "./steps/ForeCast";
import FixedDuration from "./steps/FixedDuration";
import Profitablity from "./steps/Profitablity";
import SetInvestment from "./steps/SetInvestment";
import SetDuration from "./steps/SetDuration";
import ChooseTrade from "./steps/ChooseTrade";

interface WalkThroughProps {
  className?: string;
  setShowWalkThrough: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalkThrough: React.FC<WalkThroughProps> = ({
  className,
  setShowWalkThrough,
}) => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className={`walkthroughContainer ${className}`}>
      {step > 0 ? (
        <div className="stepsContainer">
          <div className="steps">
            <p>{step}/11</p>
          </div>
          <div className="stepsSeparator"></div>
          <div
            className="closeIcon"
            onClick={() => {
              setShowWalkThrough(false);
              setStep(0);
            }}
          >
            <CloseIcon color="#ffffff80" />
          </div>
        </div>
      ) : null}

      <Welcome className={`${step === 1 ? "active" : ""}`} setStep={setStep} />
      <Stocks className={`${step === 2 ? "active" : ""}`} setStep={setStep} />
      <TheCharts
        className={`${step === 3 ? "active" : ""}`}
        setStep={setStep}
      />
      <ForeCast className={`${step === 4 ? "active" : ""}`} setStep={setStep} />
      <FixedDuration
        className={`${step === 5 ? "active" : ""}`}
        setStep={setStep}
      />
      <Profitablity
        className={`${step === 6 ? "active" : ""}`}
        setStep={setStep}
        open={step === 6}
      />
      <SetInvestment
        className={`${step === 7 ? "active" : ""}`}
        setStep={setStep}
        open={step === 7}
      />
      <SetDuration
        className={`${step === 8 ? "active" : ""}`}
        setStep={setStep}
        open={step === 8}
      />
      <ChooseTrade
        className={`${
          step === 9 || step === 10 || step === 11 ? "active" : ""
        }`}
        setStep={setStep}
        open={step === 9}
        setShowWalkThrough={setShowWalkThrough}
      />
    </div>
  );
};

export default WalkThrough;

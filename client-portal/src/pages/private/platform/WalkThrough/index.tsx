import { useState } from "react";
import { CloseIcon } from "../../../../assets/icons";
import "./walkThrough.scss";
import "./steps/steps.scss";
import Welcome from "./steps/Welcome";
import Stocks from "./steps/Stocks";
import TheCharts from "./steps/TheCharts";
import ForeCast from "./steps/ForeCast";
import FixedDuration from "./steps/FixedDuration";

interface WalkThroughProps {}

const WalkThrough: React.FC<WalkThroughProps> = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="walkthroughContainer">
      <div className="stepsContainer">
        <div className="steps">
          <p>{step}/11</p>
        </div>
        <div className="stepsSeparator"></div>
        <div className="closeIcon">
          <CloseIcon color="#ffffff80" />
        </div>
      </div>

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
    </div>
  );
};

export default WalkThrough;

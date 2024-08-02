import { withTranslation } from "react-i18next";
import TestWalkThrough from "components/welcomeSteps/components/modal/TestWalkThrough";
import Background from "../../components/background/Background.tsx";

interface StepTenProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepTen: React.FC<StepTenProps> = ({
  step,
  setStep,
}) => {

  return (
  <div className="welcomeStepSeven">
    <Background step={step}/>

    <div className="modal">
      <TestWalkThrough setStep={setStep} step={step}/>
    </div>
  </div>

)
  ;
};

export default withTranslation()(StepTen);

import { withTranslation} from "react-i18next";
import TestWalkThrough from "components/welcomeSteps/components/modal/TestWalkThrough";
import Background from "../../components/background/Background.tsx";

interface StepElevenProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleClick: any;
}

const StepEleven: React.FC<StepElevenProps> = ({
  step,
  setStep,
}) => {
  return (
      <div className="welcomeStepSeven">
          <Background step={step}/>

          {/*<div className="button">*/}
          {/*    <MyButton text="finishTrading" handleClick={handleClick}/>*/}
          {/*</div>*/}

          <div className="modal">
              <TestWalkThrough setStep={setStep} step={step}/>
          </div>
      </div>
  )
      ;
};

export default withTranslation()(StepEleven);

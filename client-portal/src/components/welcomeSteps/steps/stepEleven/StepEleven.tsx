import { useTranslation, withTranslation} from "react-i18next";
import TestWalkThrough from "components/welcomeSteps/components/modal/TestWalkThrough";
import Background from "../../components/background/Background.tsx";
import CountDown from "components/countDown/CountDown.tsx";
import MyButton from "components/UI/buttons/MyButton.tsx";

import './stepEleven.scss'

interface StepElevenProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleClick: any;
}

const StepEleven: React.FC<StepElevenProps> = ({
  step,
  setStep,
}) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
      <div className="welcomeStepEleven">
          <Background step={step}/>

          <div className="stepElevenmain_info">
        <h2>{t("finishTrading")}</h2>
        <div className="stepElevenButton">
          <MyButton text="Complete Training" handleClick={handleClick} />
        </div>
      </div>
          <div className="modalEleven">
              <TestWalkThrough setStep={setStep} step={step}/>
          </div>
      </div>
  )
     
};

export default withTranslation()(StepEleven);

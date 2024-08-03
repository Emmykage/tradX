import MyButton from "components/UI/buttons/MyButton";
import "./StepFour.scss";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import Background from "components/welcomeSteps/components/background/Background";

interface StepFourProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepFour: FC<StepFourProps> = ({ setStep, step }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className="welcomeStepFour">
      <div className="background">
        <Background step={step} />
      </div>
      <div className="stepBottomInfo">
        <h2>{t("walkthroughForeCastSubText")}</h2>
        <div className="stepBottomButton">
          <MyButton text="next" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default StepFour;

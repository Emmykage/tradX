import MyButton from "components/UI/buttons/MyButton";
import "./StepFive.scss";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import Background from "components/welcomeSteps/components/background/Background";

interface StepFiveProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
  step: number;
}

const StepFive: FC<StepFiveProps> = ({ setStep, step }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className="welcomeStepFive">
      <div className="background">
        <Background step={step} />
      </div>
      <div className="stepBottomInfo">
        <h2>{t("walkthroughFixedDurationOffer")}</h2>
        <div className="stepBottomButton">
          <MyButton text="next" handleClick={handleClick} />
        </div>
      </div>
    </div>
    
  );
};

export default StepFive;

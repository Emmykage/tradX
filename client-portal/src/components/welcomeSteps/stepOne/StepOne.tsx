import MyButton from "components/UI/buttons/MyButton";
import "./StepOne.scss";
import { useTranslation } from "react-i18next";
import { FC } from "react";

interface StepOneProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
}

const StepOne: FC<StepOneProps> = ({ setStep }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className="welcomeStepOne">
      <div className="image">
        <img src="welcome-icons/big_like.png" />
      </div>
      <div className="info">
        <div className="title">{t("welcome")}</div>
        <div className="text">{t("walkthroughWelcomeSubText")}</div>
        <div className="button">
          <MyButton text="startTraining" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default StepOne;

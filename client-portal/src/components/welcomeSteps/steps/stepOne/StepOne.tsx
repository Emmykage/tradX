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
    <div className="stepOneContainer">
        <img src="welcome-icons/big_like.png" />
          <div className="stepOneHeader">
              <h2>{t("welcome")}</h2>
              <span>{t("walkthroughWelcomeSubText")}</span>
          <div className="stepOneButton">
           <MyButton text="startTraining" handleClick={handleClick} />
          </div>
        </div>
    </div>
  );
};

export default StepOne;

import MyButton from "components/UI/buttons/MyButton";
import "./StepThree.scss";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import Background from "../background/Background";

interface StepThreeProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
}

const StepThree: FC<StepThreeProps> = ({ setStep }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className="welcomeStepThree">
      <div className="background">
        <Background />
      </div>
      <div className="info">
        <div className="text">{t("walkthroughChartsSubText")}</div>
        <div className="button">
          <MyButton text="next" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default StepThree;

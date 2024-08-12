import MyButton from "components/UI/buttons/MyButton";
import "./StepOne.scss";
import welcomeIcon from 'assets/icons/welcomeIcons/thumbsup.svg';
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
      <div className="stepOneHeader mx-auto">
        <img src={welcomeIcon} className=" mx-auto object-cover" />
        <h2 className="text-white text-[27px] text-center font-bold">{t("welcome")}</h2>
        <p className="text-[21px] text-center text-white mt-3.5">{t("walkthroughWelcomeSubText")}</p>
        <div className="stepOneButton mt-9">
          <MyButton text="startTraining" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default StepOne;

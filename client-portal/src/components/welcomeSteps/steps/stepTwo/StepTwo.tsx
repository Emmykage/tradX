import MyButton from "components/UI/buttons/MyButton";
import "./StepTwo.scss";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import data from "./data.json";

import SecondStepIcon from '../../../../../public/welcome-icons/welcome_step_two_background.png'

interface StepTwoProps {
  setStep: (step: number | ((prevStep: number) => number)) => void;
}

const StepTwo: FC<StepTwoProps> = ({ setStep }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className="welcomeStepTwo">
      <div className="stepTwoW_background">
        <img src={SecondStepIcon} />
      </div>
      <div className="stepTwoItems">
        {data.assets &&
          data.assets.map((item, index) => (
            <div className="setpTwoItemCard" key={index + item.name}>
                <img src={item.image} alt="" />
              <h2>{item.name}</h2>
            </div>
          ))}
      </div>
      <div className="stepTwomain_info">
        <h2>{t("walkthroughStocksSubText")}</h2>
        <div className="stepTwoButton">
          <MyButton text="next" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;

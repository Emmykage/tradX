import MyButton from "components/UI/buttons/MyButton";
import "./StepTwo.scss";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import data from "./data.json";

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
      <div className="w_background">
        <img src="welcome-icons/welcome_step_two_background.png" />
      </div>
      <div className="items">
        {data.assets &&
          data.assets.map((item, index) => (
            <div className="item" key={index + item.name}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div>{item.name}</div>
            </div>
          ))}
      </div>
      <div className="main_info">
        <div className="text">{t("walkthroughStocksSubText")}</div>
        <div className="button">
          <MyButton text="next" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;

import { FC } from "react";
import "./WelcomeHeader.scss";
import { useTranslation } from "react-i18next";
import MyButton from "components/UI/buttons/MyButton";

interface WelcomeHeaderProps {
  step: number;
  setStep: (step: number | ((prevStep: number) => number)) => void;
}

const STEPS_VALUE = 11;

const WelcomeHeader: FC<WelcomeHeaderProps> = ({ step, setStep }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <div className="welcomeHeader">
      {step === 1 && (
        <div className="image">
          <img src="welcome-icons/close_red.svg" />
        </div>
      )}
      {step >= 3 && step !== 6 && (
        <div className="header_left_opacity">
          <div className="header_image">
            <img src="/welcome-icons/step_two/usd_2.png" />
          </div>
          <div>EUR/USD</div>
          {step >= 7 && <div className="percent_text">82%</div>}
        </div>
      )}

      {step === 6 && (
        <div className="header_left">
          <img src="/welcome-icons/step_two/usd_2.svg" />
          <div>EUR/USD</div>
          <div className="info_block">
            <div className="triangle">
              <img src="/welcome-icons/triangle_little.svg" alt="" />
            </div>
            <div>{t("toolTipContent")}</div>
            <MyButton
              color={"#172331"}
              background={"#FFFFFF"}
              text={"understand"}
              handleClick={handleClick}
            />
          </div>
        </div>
      )}

      <div className="header_right">
        <div className="header_text">
          {step <= STEPS_VALUE ? step : STEPS_VALUE}/{STEPS_VALUE}
        </div>
        <div className="line"></div>
        <div className="close_img">
          <img src="welcome-icons/close_grey.svg" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;

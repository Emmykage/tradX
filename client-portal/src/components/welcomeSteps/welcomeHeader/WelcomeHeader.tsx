import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./WelcomeHeader.scss";

interface WelcomeHeaderProps {
  step: number;
}

const STEPS_VALUE = 11;

const WelcomeHeader: FC<WelcomeHeaderProps> = ({ step }) => {
  const { t } = useTranslation();

  return (
    <div className="welcomeHeader">
      {step === 1 && (
        <div className="image">
          <img src="welcome-icons/close_red.svg" />
        </div>
      )}
      {step === (3 || 4 || 5) && (
        <div className="header_left">
          EUR/USD
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

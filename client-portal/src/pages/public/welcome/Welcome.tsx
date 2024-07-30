import React from "react";
import "./Welcome.scss";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="welcome">
      <div className="welcome_header">
        <img src="welcome-icons/close_red.svg" />
        <div className="header_right">
          <div className="header_text">1/11</div>
          <div className="line"></div>
          <div>
            <img src="welcome-icons/close_grey.svg" />
          </div>
        </div>
      </div>
      <div className="welcome_main">
        <img src="welcome-icons/big_like.svg" />
        <div className="info">
          <div className="title">{t("welcome!")}</div>
          <div className="text">{t("welcome_sub")}</div>
          <button className="button">{t("startTraining")}</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

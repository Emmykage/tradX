import React from "react";
import "./settingsMenu.scss";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";

interface SettingsItemCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  danger?: boolean;
  textCenter?: boolean;
  onClick?: () => void;
}

const SettingsItemCard: React.FC<SettingsItemCardProps> = ({
  icon,
  title,
  subtitle,
  danger,
  textCenter,
  onClick,
}) => {
  return (
    <MainItemCard
      className={`settingsItemCard ${danger ? "danger" : ""}`}
      variant={2}
      onClick={onClick}
    >
      <div className={`cardLeftIcon ${textCenter ? "textCenter" : ""}`}>
        {icon}
      </div>
      <div className="cardRightContent">
        {title && (
          <p
            className={`
            settingsItemCardTitle
            ${!subtitle && "noMargin"}
            ${danger ? "danger" : ""}
            ${textCenter ? "textCenter" : ""}`}
          >
            {title}
          </p>
        )}
        {subtitle && <p className="settingsItemCardSubtitle">{subtitle}</p>}
      </div>
    </MainItemCard>
  );
};

export default SettingsItemCard;

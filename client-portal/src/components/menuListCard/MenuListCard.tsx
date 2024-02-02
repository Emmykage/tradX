import React from "react";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./menuListCard.scss";

interface MenuListCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  danger?: boolean;
  textCenter?: boolean;
  onClick?: () => void;
}

const MenuListCard: React.FC<MenuListCardProps> = ({
  icon,
  title,
  subtitle,
  danger,
  textCenter,
  onClick,
}) => {
  return (
    <MainItemCard
      className={`menuListCard ${danger ? "danger" : ""}`}
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
            menuListCardTitle
            ${!subtitle && "noMargin"}
            ${danger ? "danger" : ""}
            ${textCenter ? "textCenter" : ""}`}
          >
            {title}
          </p>
        )}
        {subtitle && <p className="menuListCardSubtitle">{subtitle}</p>}
      </div>
    </MainItemCard>
  );
};

export default MenuListCard;

import React from "react";
import MainItemCard from "../mainItemCard/MainItemCard";
import "./menuListCard.scss";

interface MenuListCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  danger?: boolean;
  textCenter?: boolean;
  onClick?: () => void;
  className?: string;
}

const MenuListCard: React.FC<MenuListCardProps> = ({
  icon,
  title,
  subtitle,
  danger,
  textCenter,
  onClick,
  className,
}) => {
  return (
    <MainItemCard
      className={`menuListCard ${danger ? "danger" : ""} ${
        className ? className : ""
      }`}
      variant={2}
      onClick={onClick}
    >
      {icon ? (
        <div className={`cardLeftIcon ${textCenter ? "textCenter" : ""}`}>
          {icon}
        </div>
      ) : null}
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

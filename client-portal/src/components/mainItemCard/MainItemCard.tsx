import React from "react";
import "./mainItemCard.scss";

interface MainItemCardProps {
  variant?: 1 | 2;
  className?: string;
  fullHeight?: boolean;
  onClick?: () => void;
  pointer?: boolean;
}

const MainItemCard: React.FC<React.PropsWithChildren<MainItemCardProps>> = ({
  variant = 1,
  children,
  className,
  fullHeight,
  onClick,
  pointer = true,
}) => {
  return variant === 1 ? (
    <div
      onClick={onClick}
      className={`mainItemCard ${fullHeight ? "fullHeight" : ""} ${
        pointer ? "" : "none-pointer"
      }`}
    >
      <div className={`mainItemCardContent ${className}`}>{children}</div>
    </div>
  ) : (
    <div
      onClick={onClick}
      className={`mainItemCardv2 ${fullHeight ? "fullHeight" : ""} ${
        pointer ? "" : "none-pointer"
      }`}
    >
      <div className={`mainItemCardv2Content ${className}`}>{children}</div>
    </div>
  );
};

export default MainItemCard;

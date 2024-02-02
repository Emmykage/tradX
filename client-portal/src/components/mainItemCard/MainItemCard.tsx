import React from "react";
import "./mainItemCard.scss";

interface MainItemCardProps {
  variant?: 1 | 2;
  className?: string;
  fullHeight?: boolean;
  onClick?: () => void;
}

const MainItemCard: React.FC<React.PropsWithChildren<MainItemCardProps>> = ({
  variant = 1,
  children,
  className,
  fullHeight,
  onClick,
}) => {
  return variant === 1 ? (
    <div
      onClick={onClick}
      className={`mainItemCard ${fullHeight ? "fullHeight" : ""}`}
    >
      <div className={`mainItemCardContent ${className}`}>{children}</div>
    </div>
  ) : (
    <div
      onClick={onClick}
      className={`mainItemCardv2 ${fullHeight ? "fullHeight" : ""}`}
    >
      <div className={`mainItemCardv2Content ${className}`}>{children}</div>
    </div>
  );
};

export default MainItemCard;

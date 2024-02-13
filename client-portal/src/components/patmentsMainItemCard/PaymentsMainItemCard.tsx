import React from "react";
import "./PaymentsMainItemCard.scss";

interface PaymentsMainItemCardProps {
  className?: string;
  fullHeight?: boolean;
  onClick?: () => void;
  pointer?: boolean;
  primary?: boolean;
}

const PaymentsMainItemCard: React.FC<
  React.PropsWithChildren<PaymentsMainItemCardProps>
> = ({
  children,
  className,
  fullHeight,
  onClick,
  pointer = true,
  primary = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`PaymentsMainItemCard ${primary ? "primary" : ""} ${
        fullHeight ? "fullHeight" : ""
      } ${pointer ? "" : "none-pointer"}`}
    >
      <div className={`mainItemCardContent ${className ? className : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default PaymentsMainItemCard;

import React from "react";
import PaymentsMainItemCard from "../patmentsMainItemCard/PaymentsMainItemCard";
import "./PaymentListItemCard.scss";

interface PaymentListItemCardProps {
  icon?: React.ReactNode;
  title?: string;
  danger?: boolean;
  onClick?: () => void;
  className?: string;
  primary?: boolean;
  disabled?: boolean;
  customContent?: React.ReactNode;
}

const PaymentListItemCard: React.FC<PaymentListItemCardProps> = ({
  icon,
  title,
  danger,
  onClick,
  className,
  primary = false,
  disabled = false,
  customContent,
}) => {
  return (
    <PaymentsMainItemCard
      className={`paymentListItemCard ${danger ? "danger" : ""} ${
        className ? className : ""
      }`}
      onClick={onClick}
      primary={primary}
      pointer={!disabled}
    >
      {icon ? (
        <div className={`cardLeftIcon  ${disabled ? "disabled" : ""}`}>
          {icon}
        </div>
      ) : null}
      {customContent ? (
        customContent
      ) : (
        <div className="cardRightContent">
          {title && <p className=" menuListCardTitle">{title}</p>}
        </div>
      )}
    </PaymentsMainItemCard>
  );
};

export default PaymentListItemCard;

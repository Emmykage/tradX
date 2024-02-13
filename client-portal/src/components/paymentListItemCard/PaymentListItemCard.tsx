import React from "react";
import PaymentsMainItemCard from "../patmentsMainItemCard/PaymentsMainItemCard";
import "./PaymentListItemCard.scss";

interface PaymentListItemCardProps {
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  danger?: boolean;
  textCenter?: boolean;
  subTextCenter?: boolean;
  onClick?: () => void;
  className?: string;
  primary?: boolean;
  disabled?: boolean;
  customContent?: React.ReactNode;
  variant?: 1 | 2 | 3;
  suffix?: React.ReactNode;
}

const PaymentListItemCard: React.FC<PaymentListItemCardProps> = ({
  icon,
  title,
  subtitle,
  danger,
  textCenter,
  subTextCenter,
  onClick,
  className,
  primary = false,
  disabled = false,
  customContent,
  variant = 1,
  suffix,
}) => {
  return (
    <PaymentsMainItemCard
      className={`paymentListItemCard ${danger ? "danger" : ""} ${
        className ? className : ""
      }`}
      variant={variant}
      onClick={onClick}
      primary={primary}
      pointer={!disabled}
    >
      {icon ? (
        <div
          className={`cardLeftIcon ${textCenter ? "textCenter" : ""} ${
            disabled ? "disabled" : ""
          }`}
        >
          {icon}
        </div>
      ) : null}
      {customContent ? (
        customContent
      ) : (
        <div className="cardRightContent">
          {title && (
            <p
              className={`
            menuListCardTitle
            ${!subtitle && "noMargin"}
            ${danger ? "danger" : ""}
            ${disabled ? "disabled" : ""}
            ${textCenter ? "textCenter" : ""}`}
            >
              {title}
            </p>
          )}
          {subtitle && (
            <p
              className={`
            menuListCardSubtitle
            ${subTextCenter ? "subTextCenter" : ""}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      {suffix ? (
        <div className={`cardRightSuffix ${disabled ? "disabled" : ""}`}>
          {suffix}
        </div>
      ) : null}
    </PaymentsMainItemCard>
  );
};

export default PaymentListItemCard;

import { Typography } from "antd";
import "./Deposit.scss";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import { PromoCodeIcon } from "../../../../../assets/icons";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";

interface DepositProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const Deposit: FC<DepositProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="deposit">
      <Typography.Text className="deposit-subtext">
        USD Account #65715654
      </Typography.Text>
      <div className="hr" />
      <DepositCard
        account="Deposit Amount"
        amount="USD 30"
        icon
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("select-deposit-amount");
        }}
      />
      <DepositCard account="Payment Method" amount="Card" cardIcon icon onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("payment-method");
      }} />
      <PaymentListItemCard
        onClick={() => {
        setIsRightSubDrawerOpen(true);
        setIsRightSubDrawerContent("card-details-menu");
        }}
        className="payment-card-next-button"
        border
        title="Next"
      />
      <PaymentListItemCard icon={<PromoCodeIcon />} title="Promo Code" onClick={() => {
        setIsRightSubDrawerOpen(true);
        setIsRightSubDrawerContent("payments-promo-code");
      }} />
    </div>
  );
};

export default Deposit;

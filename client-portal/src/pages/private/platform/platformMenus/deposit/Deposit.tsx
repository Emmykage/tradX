import { Typography } from "antd";
import "./Deposit.scss";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import { PromoCodeIcon } from "../../../../../assets/icons";

const Deposit = () => {
  return (
    <div className="deposit">
      <Typography.Text className="deposit-subtext">
        USD Account #65715654
      </Typography.Text>
      <div className="hr" />
      <DepositCard account="Deposit Amount" amount="USD 30" icon />
      <DepositCard account="Deposit Amount" amount="USD 30" cardIcon icon />
      <PaymentListItemCard
        className="payment-card-next-button"
        border
        title="Next"
      />
      <PaymentListItemCard icon={<PromoCodeIcon />} title="Promo Code" />
    </div>
  );
};

export default Deposit;

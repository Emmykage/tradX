import { Typography } from "antd";
import "./PromoCodes.scss";
import PromoCodeInput from "../../../../../components/promoCodeInpute/PromoCodeInput";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import { PromoCodeIcon } from "../../../../../assets/icons";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";

interface PromoCodesProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}
const PromoCodes: FC<PromoCodesProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="promocodes">
      <Typography.Title className="promocode-title">
        Enter Promo Code
      </Typography.Title>
      {/* <Typography.Paragraph className="promocode-paragraph">
        Use promo codes to unlock useful trading tools and features
      </Typography.Paragraph> */}
      <PromoCodeInput
        className="promocode-input"
        title="Enter Your PromoCode"
      />
      <PaymentListItemCard
        icon={<PromoCodeIcon />}
        title="Check Promo Code"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("promo-code-applied")
        }}
      />
    </div>
  );
};

export default PromoCodes;

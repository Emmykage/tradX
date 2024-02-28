import { Col, Row, Typography } from "antd";
import "./CardDetailsMenu.scss";
import { PaymentIcon, SecureIcon } from "../../../../../assets/icons";
import DepositInput from "../../../../../components/depositInput/DepositInput";
import {
  AmericanCreditCardIcon,
  JcbCreditCardIcon,
  VisaCardIcon,
} from "../../../../../assets/icons";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";

const CreditCardsList = [
  {
    icon: <AmericanCreditCardIcon />,
  },
  {
    icon: <JcbCreditCardIcon />,
  },
  {
    // icon: <LibreCreditCardIcon />,
  },
  {
    icon: <VisaCardIcon />,
  },
];
interface CardDetailsMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}
const CardDetailsMenu: FC<CardDetailsMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="card-details">
      <Typography.Text className="deposit-subtext">
        USD Account #65715654
      </Typography.Text>
      <div className="hr" />
      <div className="payment-amount-info">
        <PaymentIcon />
        <div className="payment-text">
          <Typography.Text className="payment-subtext">
            Payment Amount
          </Typography.Text>
          <Typography.Text className="payment-amount">30 USD</Typography.Text>
        </div>
      </div>
      <DepositInput CardsIconList={CreditCardsList} placeholder="Card Number" />
      <Row gutter={16}>
        <Col span={12}>
          <DepositInput placeholderColor type="text" placeholder="MM/YY" />
        </Col>
        <Col span={12}>
          <DepositInput placeholderColor type="text" placeholder="CVV/CVC" />
        </Col>
        <Col span={24}>
          <DepositInput
            placeholderColor
            type="text"
            placeholder="Cardholder Name"
          />
        </Col>
      </Row>
      <div className="card-details-description-main">
        <Typography.Text className="card-details-description">
          Enter your full name as it is written on the card. If the card has no
          name, enter your dull legal name.
        </Typography.Text>
      </div>
      <div className="deposit-secure">
        <SecureIcon />
        <Typography.Text className="deposit-secure-text">
          This is a secure 128-bit encrypted payment.
        </Typography.Text>
      </div>
      <PrimaryButton
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("deposit-confirm-payment");
        }}
        className="deposit-button"
        Title="Pay USD 30"
      />
    </div>
  );
};

export default CardDetailsMenu;

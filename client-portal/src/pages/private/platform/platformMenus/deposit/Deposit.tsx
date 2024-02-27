import { Col, Row, Typography } from "antd";
import "./Deposit.scss";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import {
  EuroFlag,
  PaymentIcon,
  PromoCodeIcon,
} from "../../../../../assets/icons";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import SecondaryButton from "../../../../../components/secondaryButton/SecondaryButton";

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
      <div className="CurrentBalance">
        <p>Current Balance</p>
        <h3>EUR 00.0</h3>
      </div>
      <DepositCard
        account="Deposit Amount"
        amount="EUR 250"
        CountryIcon={<EuroFlag />}
        icon
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("select-deposit-amount");
        }}
      />
      <DepositCard
        account="Payment Method"
        amount="Card"
        CountryIcon={<PaymentIcon />}
        disabled
        icon
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("payment-method");
        }}
      />
      <Row gutter={16} className="buttonsContainer">
        <Col span={12}>
          <PrimaryButton
            disabled
            onClick={() => {
              setIsRightSubDrawerOpen(true);
              setIsRightSubDrawerContent("card-details-menu");
            }}
            className="payment-card-next-button"
            Title="Next"
          />
        </Col>
        <Col span={12}>
          <SecondaryButton
            Title="Promo Code"
            className="PromoCode"
            icon={<PromoCodeIcon />}
            onClick={() => {
              setIsRightSubDrawerOpen(true);
              setIsRightSubDrawerContent("payments-promo-code");
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Deposit;

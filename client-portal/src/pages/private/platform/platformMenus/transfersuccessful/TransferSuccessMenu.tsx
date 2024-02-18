import { Typography } from "antd";
import {
  SuccessIcon,
  Trusty1Icon,
  Trusty2Icon,
  Trusty3Icon,
  Trusty4Icon,
} from "../../../../../assets/icons";
import "./TransferSuccessMenu.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";

const TransferSuccessMenu = () => {
  return (
    <div className="deposit-success">
      <div className="deposit-success-sub">
        <SuccessIcon width="40" height="40" />
        <Typography.Text className="success-message">Transfer</Typography.Text>
        <div>
          <Typography.Title className="deposited-payment">
            30 USD
          </Typography.Title>
        </div>
      </div>
      <div className="button">
        <PaymentListItemCard border title="Close" />
      </div>
      <div className="deposited-trust">
        <Typography.Text className="deposited-trust-text">
          Trusted by more than 500,000 users globally
        </Typography.Text>
        <div className="deposited-trust-icons">
          <Trusty1Icon />
          <Trusty2Icon />
          <Trusty3Icon />
          <Trusty4Icon />
        </div>
        <Typography.Text className="deposited-trust-subtext">
          Your funds are safely stored in a trusted bank. All payments are
          secures by 128-bit encryption and processed at a tier 4 data center
          with 99.995% availability. Our platform is checked for malware.
        </Typography.Text>
      </div>
    </div>
  );
};

export default TransferSuccessMenu;

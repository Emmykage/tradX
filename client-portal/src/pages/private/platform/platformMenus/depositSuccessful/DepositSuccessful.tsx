import { Typography } from "antd";
import {
  SuccessIcon,
  Trusty1Icon,
  Trusty2Icon,
  Trusty3Icon,
} from "../../../../../assets/icons";
import "./DepositSuccessful.scss";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";

const DepositSuccessful = () => {
  return (
    <div className="deposit-success">
      <div className="deposit-success-sub">
        <SuccessIcon />
        <Typography.Text className="success-message">
          Payment Successful
        </Typography.Text>
        <div>
          <Typography.Title className="deposited-payment">
            250 EUR
          </Typography.Title>
        </div>
      </div>
      <PrimaryButton
        className="button"
        Title="Close"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="deposited-trust">
        <Typography.Text className="deposited-trust-text">
          Trusted by more than 500,000 users globally
        </Typography.Text>
        <div className="deposited-trust-icons">
          <Trusty1Icon />
          <Trusty2Icon />
          <Trusty3Icon />
          <img src="/menu-images/svgs/NortanSecured.svg" alt="svg" />
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

export default DepositSuccessful;

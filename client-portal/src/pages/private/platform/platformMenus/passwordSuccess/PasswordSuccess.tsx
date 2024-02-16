import { SuccessIcon } from "../../../../../assets/icons";
import { Typography } from "antd";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import "./PasswordSuccess.scss";

const PasswordSuccess = () => {
  return (
    <div className="password-success">
      <SuccessIcon width="40" height="40" />
      <Typography.Title className="success-message">
        Your Password has been modified!
      </Typography.Title>
      <div className="button">
        <PaymentListItemCard border title="Done" />
      </div>
    </div>
  );
};

export default PasswordSuccess;

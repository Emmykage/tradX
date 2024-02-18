import { SuccessIcon } from "../../../../../assets/icons";
import { Typography } from "antd";
import "./WithdrawRequest.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";

const WithdrawRequest = () => {
  return (
    <div className="withdraw-success">
      <div className="withdraw-success-sub">
        <SuccessIcon width="40" height="40" />
        <Typography.Title className="success-message">
          Withdrawal Request Created
        </Typography.Title>
      </div>
      <div className="main-line" />
      <div className="withdraw-transfer-amount">
        <div className="withdraw-content">
          <div className="withdraw-details">
            <div className="withdraw-transfer">
              <p>Transfer Amount - USD</p>
              <p>10.0</p>
            </div>
            <div className="hr" />
            <div className="withdraw-transfer">
              <p>Comission - USD</p>
              <p>0.00</p>
            </div>
            <div className="hr" />
            <div className="withdraw-transfer">
              <p>Total - USD</p>
              <p>10.0</p>
            </div>
            <div className="hr" />
          </div>
        </div>
      </div>
      <div className="button">
        <PaymentListItemCard title="Done" />
      </div>

      <div className="withdraw-trust">
        <Typography.Text className="withdraw-trust-subtext">
          97% of withdrawal requests are processed within 24 hours. You can see
          the current request status in the Withdraw section.
        </Typography.Text>
      </div>
    </div>
  );
};

export default WithdrawRequest;

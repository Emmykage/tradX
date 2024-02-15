import { ArrowRightOS, InfoCircleIconSmall } from "../../assets/icons";
import { Typography } from "antd";
import "./WithdrawCard.scss";

const WithdrawCard = () => {
  return (
    <div className="Withdraw-card">
      <div>
        <InfoCircleIconSmall />
      </div>
      <div className="withdraw-subcard">
        <Typography.Text className="Withdraw-text">
          You have insufficient funds to make a withdrawal from this account
        </Typography.Text>
        <div className="withdraw-link">
          <Typography.Link className="withdraw-link-text">
            Make Deposit
          </Typography.Link>
          <ArrowRightOS stroke="#27A2FF" />
        </div>
      </div>
    </div>
  );
};

export default WithdrawCard;

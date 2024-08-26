import { ArrowRightOS, InfoCircleIconSmall } from "../../assets/icons";
import { Typography } from "antd";
import "./WithdrawCard.scss";
import { Dispatch, FC, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../pages/private/platform/types";


interface WithdrawCardProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}
const WithdrawCard: FC<WithdrawCardProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="Withdraw-card">
      <div>
        <InfoCircleIconSmall />
      </div>
      <div className="withdraw-subcard">
        <Typography.Text className="Withdraw-text">
          You have insufficient funds to make a withdrawal from this account
        </Typography.Text>
        <div
          className="withdraw-link"
          onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("payments-deposit");
          }}
        >
          <Typography.Link className="withdraw-link-text">
            Make Deposit
          </Typography.Link>
          <ArrowRightOS width="" height="" stroke="#27A2FF" />
        </div>
      </div>
    </div>
  );
};

export default WithdrawCard;

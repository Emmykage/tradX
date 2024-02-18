import { SuccessIcon } from "../../../../../assets/icons";
import { Typography } from "antd";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import "./PasswordSuccess.scss";
import { Dispatch, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";

interface PasswordSuccessProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PasswordSuccess: React.FunctionComponent<PasswordSuccessProps> = ({
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="password-success">
      <SuccessIcon width="40" height="40" />
      <Typography.Title className="success-message">
        Your Password has been modified!
      </Typography.Title>
      <div className="button">
        <PaymentListItemCard
          onClick={() => {
            console.log("settings");
            setIsRightSubDrawerContent("settings");
          }}
          border
          title="Done"
        />
      </div>
    </div>
  );
};

export default PasswordSuccess;

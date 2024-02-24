import { Typography } from "antd";
import { SuccessIcon } from "../../../../../assets/icons";
import "./AccountArchivedSuccessMenu.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import { Dispatch, SetStateAction } from "react";
import { RightDrawerContent } from "../../types";

interface AccountArchivedSuccessMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightDrawerContent: Dispatch<SetStateAction<RightDrawerContent>>;
}

const AccountArchivedSuccessMenu: React.FunctionComponent<
  AccountArchivedSuccessMenuProps
> = ({ setIsRightDrawerContent, setIsRightSubDrawerOpen }) => {
  return (
    <div className="accountArchivedSuccessMenu">
      <div className="accountArchivedSuccessMenu-sub">
        <SuccessIcon width="3.375rem" height="3.375rem" />
        <Typography.Text className="success-message">
          Account Archived
        </Typography.Text>
        <p>
          Your USDT Account 3 account 2859844963 has been successfully archived.
        </p>
        <div className="buttonContainer">
          <PaymentListItemCard
            onClick={() => {
              setIsRightSubDrawerOpen(false);
              setIsRightDrawerContent("account");
            }}
            className="button"
            title="Done"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountArchivedSuccessMenu;

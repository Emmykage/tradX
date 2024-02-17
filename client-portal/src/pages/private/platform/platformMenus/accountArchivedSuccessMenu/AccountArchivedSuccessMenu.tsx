import { Typography } from "antd";
import { SuccessIcon } from "../../../../../assets/icons";
import "./AccountArchivedSuccessMenu.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";

const AccountArchivedSuccessMenu = () => {
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
        <PaymentListItemCard className="button" border title="Done" />
      </div>
    </div>
  );
};

export default AccountArchivedSuccessMenu;

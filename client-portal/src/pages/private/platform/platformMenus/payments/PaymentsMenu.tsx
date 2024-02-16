import {
  DepositsIcon2,
  WithdrawIcon2,
  TransactionIcon2,
  HistoryIcon,
  LoanIcon,
} from "../../../../../assets/icons";
import "./paymentsMenu.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import { Dispatch, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";

interface PaymentsMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PaymentsMenu: React.FunctionComponent<PaymentsMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="paymentsMenu">
      <PaymentListItemCard title="Deposit" icon={<DepositsIcon2 />} />
      <PaymentListItemCard
        title="Withdraw"
        icon={<WithdrawIcon2 />}
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("withdraw");
        }}
      />
      <PaymentListItemCard
        title="Transfer"
        icon={<TransactionIcon2 />}
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("transfer");
        }}
      />
      <PaymentListItemCard title="Transaction" icon={<HistoryIcon />} />
      <PaymentListItemCard title="Loan" icon={<LoanIcon />} />
    </div>
  );
};

export default PaymentsMenu;

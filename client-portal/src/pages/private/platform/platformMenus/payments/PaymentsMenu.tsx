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
import { useNavigate } from "react-router-dom";

interface PaymentsMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PaymentsMenu: React.FunctionComponent<PaymentsMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const navigate = useNavigate();
  return (
    <div className="paymentsMenu">
      <PaymentListItemCard
        title="Deposit"
        icon={<DepositsIcon2 />}
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("payments-deposit");
        }}
      />
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
      <PaymentListItemCard
        title="Transaction"
        icon={<HistoryIcon />}
        onClick={() => navigate("/transactions")}
      />
      <PaymentListItemCard
        title="Loan"
        icon={<LoanIcon />}
        onClick={() => navigate("/get-loan")}
      />
    </div>
  );
};

export default PaymentsMenu;

import {
  DepositsIcon2,
  WithdrawIcon2,
  TransactionIcon2,
  HistoryIcon,
  LoanIcon,
  BankBuildIcon,
} from "../../../../../assets/icons";
import "./paymentsMenu.scss";
import PaymentListItemCard from "../../../../../components/paymentListItemCard/PaymentListItemCard";
import { Dispatch, SetStateAction, useState } from "react";
import { RightSubDrawerContent } from "../../types";
import {  Link, useNavigate } from "react-router-dom";
import ConnectBanksModal from "./connect-banks/ConnectBanks";

interface PaymentsMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PaymentsMenu: React.FunctionComponent<PaymentsMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="paymentsMenu">
          <PaymentListItemCard
            title="Deposit"
            icon={<DepositsIcon2 />}
            onClick={() => {
              setIsRightSubDrawerOpen(true);
              setIsRightSubDrawerContent("payments-deposit");
            }}
          />
        <ConnectBanksModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
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
        <Link to="/loan">
          <PaymentListItemCard
            title="Loan"
            icon={<LoanIcon />}
            // onClick={() => navigate("/get-loan")}
          />
        </Link>

        <PaymentListItemCard
          title="Connect Your Bank"
          icon={<BankBuildIcon />}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
    </div>
  );
};

export default PaymentsMenu;

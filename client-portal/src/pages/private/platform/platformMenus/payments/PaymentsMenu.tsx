import {
  DepositsIcon2,
  WithdrawIcon2,
  TransactionIcon2,
  HistoryIcon,
} from "../../../../../assets/icons";
import "./paymentsMenu.scss";
import { Dispatch, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";
import { useNavigate } from "react-router-dom";
// import ConnectBanksModal from "./connect-banks/ConnectBanks";

interface PaymentsMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const PaymentsMenu: React.FunctionComponent<PaymentsMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const navigate = useNavigate();

  // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="paymentsMenu">
        <div
          className="paymentItem"
          onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("payments-deposit");
          }}
        >
          <DepositsIcon2 /> <h2>Deposit</h2>
        </div>
        <div
          className="paymentItem"
          onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("withdraw");
          }}
        >
          <WithdrawIcon2 /> <h2>Withdraw</h2>
        </div>
        <div
          className="paymentItem"
          onClick={() => {
            setIsRightSubDrawerOpen(true);
            setIsRightSubDrawerContent("transfer");
          }}
        >
          <TransactionIcon2 /> <h2>Transfer</h2>
        </div>
        <div className="paymentItem" onClick={() => navigate("/transactions")}>
          <HistoryIcon /> <h2>Transaction</h2>
        </div>
        {/* <Link to="/loan">
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
        /> */}
      </div>
      {/* <ConnectBanksModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      /> */}
    </div>
  );
};

export default PaymentsMenu;

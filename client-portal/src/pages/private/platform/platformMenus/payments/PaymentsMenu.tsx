import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import {
  WalletIcon,
  WithdrawIcon,
  TransactionIcon,
} from "../../../../../assets/icons";
import "./paymentsMenu.scss";

interface PaymentsMenuProps {
  setIsRightSubDrawerOpen: (value: boolean) => void;
  setIsRightSubDrawerContent: (value: string | null) => void;
}

const PaymentsMenu: React.FunctionComponent<PaymentsMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="paymentsMenu">
      <MenuListCard title="Deposit" icon={<WalletIcon />} />
      <MenuListCard title="Withdraw" icon={<WithdrawIcon />} />
      <MenuListCard
        title="Transfer"
        icon={<TransactionIcon />}
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("transfer");
        }}
      />
      <MenuListCard
        title="Transaction"
        icon={<img src="/menu-images/history-icon.png" alt="Transaction" />}
      />
    </div>
  );
};

export default PaymentsMenu;

import {
  AddIcon,
  GlobeIcon,
  TetherIcon,
  ThreeDotsMenu,
  UsdIcon,
} from "../../../../../assets/icons";
import AccountCard from "./AccountCard";
import "./account.scss";

interface AccountMenuProps {
  setIsRightSubDrawerOpen: (value: boolean) => void;
  setIsRightSubDrawerContent: (value: string | null) => void;
}

const AccountMenu: React.FunctionComponent<AccountMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const accounts = [
    {
      icon: <GlobeIcon />,
      accountType: "Demo Account",
      secAmount: "D9,999.00",
      suffixIcon: <ThreeDotsMenu />,
      selected: true,
    },
    {
      icon: <UsdIcon />,
      accountType: "USD Account",
      amount: "$20.00",
      secAmount: "D9,999.00",
      suffixIcon: <ThreeDotsMenu />,
    },
    {
      icon: <TetherIcon />,
      accountType: "USDT Account USDT",
      amount: "₮0.00",
      secAmount: "₮0.00 Bonus",
      suffixIcon: <ThreeDotsMenu />,
      crypto: true,
    },
  ];
  return (
    <div>
      <div
        className="headerAddIcon"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("add-account");
        }}
      >
        <AddIcon />
      </div>
      <div className="accountsContainer">
        {accounts.map((account) => (
          <AccountCard
            icon={account.icon}
            accountType={account.accountType}
            secAmount={account.secAmount}
            amount={account.amount}
            suffixIcon={account.suffixIcon}
            selected={account?.selected}
            tag={account?.crypto ? "Crypto" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountMenu;

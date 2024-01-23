import { GlobeIcon, ThreeDotsMenu, UsdIcon } from "../../../../../assets/icons";
import AccountCard from "./AccountCard";
import "./account.scss";

interface AccountMenuProps {}

const AccountMenu: React.FunctionComponent<AccountMenuProps> = () => {
  const accounts = [
    {
      icon: <GlobeIcon />,
      accountType: "Demo Account",
      secAmount: "D999.00",
      suffixIcon: <ThreeDotsMenu />,
    },
    {
      icon: <UsdIcon />,
      accountType: "USD Account",
      amount: "$20.00",
      secAmount: "D999.00",
      suffixIcon: <ThreeDotsMenu />,
    },
    {
      icon: <GlobeIcon />,
      accountType: "USDT Account USDT",
      amount: "₮0.00",
      secAmount: "₮0.00 Bonus",
      suffixIcon: <ThreeDotsMenu />,
    },
  ];
  return (
    <div className="accountsContainer">
      {accounts.map((account) => (
        <AccountCard
          icon={account.icon}
          accountType={account.accountType}
          secAmount={account.secAmount}
          amount={account.amount}
          suffixIcon={account.suffixIcon}
        />
      ))}
    </div>
  );
};

export default AccountMenu;

import "./account.scss";

interface AccountCardProps {
  icon: React.ReactNode;
  suffixIcon: React.ReactNode;
  accountType: string;
  amount?: string;
  secAmount: string;
}

const AccountCard: React.FunctionComponent<AccountCardProps> = ({
  icon,
  accountType,
  amount,
  secAmount,
  suffixIcon,
}) => {
  return (
    <div className="accountCardWrapper">
      <div className="leftSide">
        <div className="icon">{icon}</div>
        <div className="accountDeets">
          <div className="accountType">{accountType}</div>
          <div className="amount">{amount}</div>
          <div className="secAmount">{secAmount}</div>
        </div>
      </div>
      <div className="suffixIcon">{suffixIcon}</div>
    </div>
  );
};

export default AccountCard;

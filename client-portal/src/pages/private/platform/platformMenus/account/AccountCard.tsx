import { ReloadIcon } from "../../../../../assets/icons";
import "./account.scss";

interface AccountCardProps {
  icon: React.ReactNode;
  suffixIcon: React.ReactNode;
  accountType: string;
  amount?: string;
  secAmount: string;
  selected?: boolean;
  tag?: string;
}

const AccountCard: React.FunctionComponent<AccountCardProps> = ({
  icon,
  accountType,
  amount,
  secAmount,
  suffixIcon,
  selected,
  tag,
}) => {
  return (
    <div className={`accountCardWrapper ${selected ? "selected" : ""}`}>
      <div className="leftSide">
        <div className="icon">{icon}</div>
        <div className="accountDeets">
          <div className="accountType">{accountType}</div>
          {amount ? <div className="amount">{amount}</div> : null}
          <div className="secAmount">{secAmount}</div>
        </div>
      </div>
      <div className="suffixIcon">
        {tag ? <div className="tag">{tag}</div> : null}
        {selected ? <ReloadIcon /> : suffixIcon}
      </div>
    </div>
  );
};

export default AccountCard;

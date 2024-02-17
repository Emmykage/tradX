import { ReloadIcon } from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import "./account.scss";

interface AccountCardProps {
  icon: React.ReactNode;
  suffixIcon: React.ReactNode;
  accountType: string;
  amount?: string;
  secAmount: string;
  selected?: boolean;
  tag?: string;
  onClick: () => void;
  selectedCard: boolean | null;
}

const AccountCard: React.FunctionComponent<AccountCardProps> = ({
  icon,
  accountType,
  amount,
  secAmount,
  suffixIcon,
  selected,
  selectedCard,
  tag,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`accountCardWrapper ${selected ? "selected" : ""}`}
    >
      {selectedCard ? (
        <MainItemCard className="new-card">
          <div className="leftSide-card">
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
          <div className="buttons">
            <button className="buttons-1">Withdraw</button>
            <button className="buttons-2">Deposit</button>
          </div>
        </MainItemCard>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default AccountCard;

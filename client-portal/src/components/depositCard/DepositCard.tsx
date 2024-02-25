import { ArrowRightOS } from "../../assets/icons";
import "./DepositCard.scss";
interface ContentProps {
  account: string;
  amount: string;
  icon?: boolean;
  cardIcon?: React.ReactNode;
  CountryIcon?: React.ReactNode;
  onClick?: any;
  disabled?: boolean;
  input?: boolean;
}

const DepositCard: React.FC<ContentProps> = ({
  account,
  amount,
  icon,
  cardIcon,
  CountryIcon,
  onClick,
  disabled,
  input,
}) => {
  return (
    <div
      className={`depositCard ${disabled ? "disable" : ""} ${
        input !== true ? "" : "cursor"
      }`}
    >
      <div className="cardContent" onClick={input !== true && onClick}>
        <div>{CountryIcon}</div>
        <div className="cardLeft">
          <div className="cardTop">
            <div className="cardSubtext">{account}</div>
          </div>
          <div className="cardBottom">
            {input ? (
              <input className="cardInput" placeholder={amount} />
            ) : (
              <div className="cardTitle">{amount}</div>
            )}
          </div>
        </div>
        <div className="cardRight">
          {cardIcon}
          {icon && <ArrowRightOS width="36" height="36" />}
        </div>
      </div>
    </div>
  );
};

export default DepositCard;

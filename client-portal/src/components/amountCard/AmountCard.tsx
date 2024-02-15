import { GoldCoinIcon, SilverCoinIcon } from "../../assets/icons";
import "./AmountCard.scss";

interface ContentProps {
  amount: string;
  iconGold?: boolean;
  iconSilver?: boolean;
}

const AmountCard: React.FC<ContentProps> = ({
  amount,
  iconGold,
  iconSilver,
}) => {
  return (
    <div className="amount-card">
      <div className="cardContent">
        {iconGold && <GoldCoinIcon />}
        {iconSilver && <SilverCoinIcon />}

        <p className="amounText">{amount}</p>
      </div>
    </div>
  );
};

export default AmountCard;

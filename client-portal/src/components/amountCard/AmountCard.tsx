import { useDispatch } from "react-redux";
import { GoldCoinIcon, SilverCoinIcon } from "../../assets/icons";
import "./AmountCard.scss";
import { setPaymentAmount } from "@store/slices/payment";
import { useCallback } from "react";

interface ContentProps {
  amount: number;
  currency: string;
  iconGold?: boolean;
  iconSilver?: boolean;
}

const AmountCard: React.FC<ContentProps> = ({
  amount,
  currency,
  iconGold,
  iconSilver,
}) => {
  const dispatch = useDispatch();

  const storeAmountHandler = useCallback(() => {
    dispatch(setPaymentAmount(amount));
  }, [amount]);

  return (
    <div className="amount-card" onClick={storeAmountHandler}>
      <div className="cardContent">
        {iconGold && <GoldCoinIcon />}
        {iconSilver && <SilverCoinIcon />}

        <p className="amounText">
          {currency}{" "}{amount}
        </p>
      </div>
    </div>
  );
};

export default AmountCard;

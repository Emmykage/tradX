import { ArrowRightOS, CardsIcons } from "../../assets/icons";
import MenuListCard from "../menuListCard/MenuListCard";
import "./DepositCard.scss";
interface ContentProps {
  account: string;
  amount: string;
  icon?: boolean;
  cardIcon?: boolean;
  CountryIcon?: React.ReactNode;
}

const DepositCard: React.FC<ContentProps> = ({
  account,
  amount,
  icon,
  cardIcon,
  CountryIcon,
}) => {
  return (
    <MenuListCard
      variant={1}
      className="deposit-card"
      customContent={
        <div className="cardContent">
          <div>{CountryIcon && CountryIcon}</div>
          <div className="cardLeft">
            <div className="cardTop">
              <div className="cardSubtext">{account}</div>
            </div>
            <div className="cardBottom">
              <div className="cardTitle">{amount}</div>
            </div>
          </div>
          <div className="cardRight">
            {cardIcon && <CardsIcons />}
            {icon && <ArrowRightOS width="36" height="36" />}
          </div>
        </div>
      }
    />
  );
};

export default DepositCard;

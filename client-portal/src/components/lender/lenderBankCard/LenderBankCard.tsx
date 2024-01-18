import { BlueEllipse, YellowEllipse } from "../../../assets/icons";
import "./lenderBankCard.scss";

interface LenderBankCardProps {
  name?: string;
  image?: string;
  small?: boolean;
}

const LenderBankCard: React.FunctionComponent<LenderBankCardProps> = ({
  name,
  image,
  small,
}) => {
  return (
    <div className={small ? "bankCardWrapperContSmall" : "bankCardWrapperCont"}>
      <div className="yellow">
        <YellowEllipse />
      </div>
      <div className="blue">
        <BlueEllipse />
      </div>
      <div className={small ? "bankCardSmall" : "bankCard"}>
        {image ? <img src={image} alt={name} /> : <p>{name}</p>}
      </div>
    </div>
  );
};

export default LenderBankCard;

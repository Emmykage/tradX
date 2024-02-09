import { TetherIcon } from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./selectAccount.scss";

interface SelectAccountProps {}

interface ContentProps {
  account: string;
  id: string;
  amount: string;
}

const Content: React.FC<ContentProps> = ({ account, id, amount }) => (
  <div className="cardContent">
    <div className="cardTop">
      <p className="cardTitle">{account}</p>
      <p className="cardTime">{id}</p>
    </div>
    <div className="cardBottom">
      <p className="cardSubtext">{amount}</p>
    </div>
  </div>
);

const SelectAccount: React.FC<SelectAccountProps> = () => {
  return (
    <div className="selectAccountMenu">
      <MenuListCard
        icon={<img src="/menu-images/us-flag.png" alt="USD" />}
        customContent={
          <Content account="USD Account" id="#2851948020" amount="USD 0.00" />
        }
      />

      <MenuListCard
        icon={<TetherIcon />}
        customContent={
          <Content account="USDT Account" id="#2851948020" amount="USDT 0.00" />
        }
      />
    </div>
  );
};

export default SelectAccount;

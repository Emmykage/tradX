import { Dispatch, SetStateAction } from "react";
import { TetherIcon } from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./selectAccount.scss";
import { RightSubDrawerContent } from "../../types";

interface SelectAccountProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

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

const SelectAccount: React.FC<SelectAccountProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div className="selectAccountMenu">
      <MenuListCard
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("transfer");
        }}
        icon={<img src="/menu-images/us-flag.png" alt="USD" />}
        customContent={
          <Content account="USD Account" id="#2851948020" amount="USD 0.00" />
        }
      />

      <MenuListCard
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("transfer");
        }}
        icon={<TetherIcon />}
        customContent={
          <Content account="USDT Account" id="#2851948020" amount="USDT 0.00" />
        }
      />
    </div>
  );
};

export default SelectAccount;

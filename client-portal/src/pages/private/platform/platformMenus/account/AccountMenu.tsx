import { Dispatch, SetStateAction, useState } from "react";
import {
  AddIcon,
  GlobeIcon,
  ReloadIcon,
  TetherIcon,
  ThreeDotsMenu,
  UsdIcon,
} from "../../../../../assets/icons";
import AccountCard from "./AccountCard";
import "./account.scss";
import { RightSubDrawerContent } from "../../types";

interface AccountMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const AccountMenu: React.FunctionComponent<AccountMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const accounts = [
    {
      id: 2,
      icon: <UsdIcon />,
      accountType: "USD Account",
      amount: "$20.00",
      secAmount: "D9,999.00",
      suffixIcon: <ThreeDotsMenu />,
    },
    {
      id: 3,
      icon: <TetherIcon />,
      accountType: "USDT Account USDT",
      amount: "₮0.00",
      secAmount: "₮0.00 Bonus",
      suffixIcon: <ThreeDotsMenu />,
      crypto: true,
    },
  ];
  return (
    <div>
      <div
        className="headerAddIcon"
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("add-account");
        }}
      >
        <AddIcon />
      </div>
      <div className="accountsContainer">
        <AccountCard
          icon={<GlobeIcon />}
          accountType="Demo Account"
          secAmount="D9,999.00"
          suffixIcon={<ReloadIcon />}
          onClick={function (): void {}}
          selectedCard={null}
          selected={true}
        />
        {accounts.map((account, index) => (
          <AccountCard
            key={account.id}
            onClick={() => setSelectedCard(index)}
            icon={account.icon}
            accountType={account.accountType}
            secAmount={account.secAmount}
            amount={account.amount}
            suffixIcon={account.suffixIcon}
            tag={account?.crypto ? "Crypto" : ""}
            selectedCard={selectedCard === index}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountMenu;

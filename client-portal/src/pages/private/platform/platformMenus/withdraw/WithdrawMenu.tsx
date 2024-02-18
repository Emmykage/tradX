import { UsdIcon2 } from "../../../../../assets/icons";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import WithdrawCard from "../../../../../components/withdrawCard/WithdrawCard";
import { Dispatch, FC, SetStateAction } from "react";

import "./withdrawMenu.scss";
import { RightSubDrawerContent } from "../../types";

interface WithdrawMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const WithdrawMenu: FC<WithdrawMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  return (
    <div>
      {/* <div className="withdrawTitle">Withdraw</div> */}
      <DepositCard
        CountryIcon={<UsdIcon2 />}
        account="From USD Account"
        amount="USD 30"
        icon
        onClick={() => {
          setIsRightSubDrawerOpen(true);
          setIsRightSubDrawerContent("select-withdraw-account");
        }}
      />
      <WithdrawCard
        setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
        setIsRightSubDrawerContent={setIsRightSubDrawerContent}
      />
    </div>
  );
};

export default WithdrawMenu;

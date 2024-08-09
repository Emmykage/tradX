import { Dispatch, SetStateAction } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { WalletData, WalletSliceState, setSelectedWallet } from "@store/slices/wallet";

import Loading from "components/loading";
import IocnPlaceholder from "assets/icons/IocnPlaceholder";
import {
  AddIcon,
  GlobeIcon,
  ReloadIcon,
  ThreeDotsMenu,
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
  const dispatch = useAppDispatch();

  const { wallets, walletsLoading, selectedWallet } = useAppSelector(
    (state: { wallet: WalletSliceState }) => state.wallet
  );

  if (walletsLoading) {
    return <Loading size="large" />;
  }

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
          secAmount=""
          amount="D9,999.00"
          suffixIcon={<ReloadIcon />}
          onClick={() => dispatch(setSelectedWallet(undefined))}
          selectedCard={null}
          selected={selectedWallet?.id ? false : true}
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
        {wallets.map((account) => (
          <AccountCard
            key={account.id}
            onClick={() => dispatch(setSelectedWallet(account))}
            icon={<IocnPlaceholder />} // To be replaced when backend add images to wallets
            // accountType={account.name}
            // amount={account.available_balance.toString()}
            // secAmount={account.account_type__symbol}
            accountData={account}
            suffixIcon={<ThreeDotsMenu />}
            tag="" // To be added when backend updates response
            selectedCard={selectedWallet?.id === account.id}
            setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
            setIsRightSubDrawerContent={setIsRightSubDrawerContent}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountMenu;

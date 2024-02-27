import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { WalletSliceState, setWallets } from "@store/slices/wallet";

import Loading from "components/loading";
import useWallet from "api/wallet/useWallet";
import {
  AddIcon,
  GlobeIcon,
  ReloadIcon,
  ThreeDotsMenu,
  UsdIcon2,
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

  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);
  const { wallets } = useAppSelector(
    (state: { wallet: WalletSliceState }) => state.wallet
  );

  const { mutate, isPending } = useWallet({
    onSuccess: (data) => {
      dispatch(setWallets(data));
    },
    onError: (error) => {
      console.log("fetching wallets error", error);
    },
  });

  useEffect(() => {
    if (wallets.length <= 0) {
      mutate(cookies.access_token);
    }
  }, []);

  if (isPending) {
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
          onClick={function (): void {}}
          selectedCard={null}
          selected={selectedCard !== null ? false : true}
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
          setIsRightSubDrawerContent={setIsRightSubDrawerContent}
        />
        {wallets.map((account, index) => (
          <AccountCard
            key={account.id}
            onClick={() => setSelectedCard(index)}
            icon={<UsdIcon2 />} // To be replaced when backend add images to wallets
            accountType={account.account_type.toString()}
            amount={account.available_balance.toString()}
            secAmount={account.balance.toString()}
            suffixIcon={<ThreeDotsMenu />}
            tag="" // To be added when backend updates response
            selectedCard={selectedCard === index}
            setIsRightSubDrawerOpen={setIsRightSubDrawerOpen}
            setIsRightSubDrawerContent={setIsRightSubDrawerContent}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountMenu;

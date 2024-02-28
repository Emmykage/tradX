import "./addAccount.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { RightSubDrawerContent } from "../../types";

import { IWalletType } from "@interfaces";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { WalletSliceState, setWalletTypes } from "@store/slices/wallet";

import Loading from "components/loading";
import useWalletTypes from "api/wallet/useWalletTypes";
import IocnPlaceholder from "assets/icons/IocnPlaceholder";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import { debounce } from "lodash";
import { PinnedIcon, SearchIcon } from "../../../../../assets/icons";

interface AddAccountMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const AddAccountMenu: React.FunctionComponent<AddAccountMenuProps> = ({
  setIsRightSubDrawerOpen,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState<IWalletType[]>([]);
  const [pinnedAccount, setPinnedAccount] = useState<IWalletType | null>(null);

  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);
  const { walletTypes } = useAppSelector(
    (state: { wallet: WalletSliceState }) => state.wallet
  );

  const { mutate, isPending } = useWalletTypes({
    onSuccess: (data) => {
      dispatch(setWalletTypes(data));
      setItems(data);
    },
    onError: (error) => {
      console.log("fetching wallet-types error", error);
    },
  });

  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (walletTypes.length <= 0) {
      mutate(cookies.access_token);
    }
  }, [mutate, walletTypes, cookies.access_token]);

  const debouncedSearch = debounce((searchTerm: string) => {
    if (searchTerm === "") {
      setItems(walletTypes.filter((item) => item.id !== pinnedAccount?.id));
    } else {
      const filteredItems = walletTypes
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((item) => item.id !== pinnedAccount?.id);
      setItems(filteredItems);
    }
  }, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => debouncedSearch.cancel();
  }, [searchTerm, pinnedAccount, items, debouncedSearch]);

  if (isPending) {
    return <Loading size="large" />;
  }

  return (
    <div className="addAccount">
      <div className="searchAccount">
        <SearchIcon />
        <input type="text" value={searchTerm} onChange={handleSearch} />
      </div>
      {pinnedAccount ? (
        <MainItemCard className="AccountPinned" variant={2}>
          <div
            className="PinnedValue"
            onClick={() => {
              setIsRightSubDrawerOpen(false);
              // setIsRightSubDrawerContent("withdraw-payment");
            }}
          >
            {/* TODO: Replace once backend sends images */}
            <IocnPlaceholder />
            <div>
              <h2>{pinnedAccount.symbol}</h2>
              <p>{pinnedAccount.name}</p>
            </div>
          </div>
          <PinnedIcon />
        </MainItemCard>
      ) : null}
      {items.map((item) => (
        <div key={item.id} className="AccountPinnedData">
          <div
            className="AccountsData"
            onClick={() => {
              setIsRightSubDrawerOpen(false);
              // setIsRightSubDrawerContent("withdraw-payment");
            }}
          >
            {/* TODO: Replace once backend sends images */}
            <IocnPlaceholder />
            <div>
              <h2>{item.symbol}</h2>
              <p>{item.name}</p>
            </div>
          </div>
          <div className="hoverPinned" onClick={() => setPinnedAccount(item)}>
            <PinnedIcon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddAccountMenu;

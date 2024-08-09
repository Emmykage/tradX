import "./addAccount.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { RightSubDrawerContent } from "../../types";

import { IWalletType } from "@interfaces";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  WalletSliceState,
  setCreateWalletData,
  setWalletTypes,
} from "@store/slices/wallet";

import Loading from "components/loading";
import useWalletTypes from "api/wallet/useWalletTypes";
import { debounce } from "lodash";
import { PinnedIcon, SearchIcon } from "../../../../../assets/icons";
import RadioInput from "components/radio/Radio";

interface AddAccountMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const AddAccountMenu: React.FunctionComponent<AddAccountMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState<IWalletType[]>([]);
  const [pinnedAccount, setPinnedAccount] = useState<IWalletType | null>(null);

  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);
  const { walletTypes, createWalletData } = useAppSelector(
    (state: { wallet: WalletSliceState  }) => state.wallet
  );
 
  const { mutate, isPending } = useWalletTypes({
    onSuccess: (data) => {
      dispatch(setWalletTypes(data.results));
      setItems(data.results);
    },
    onError: (error) => {
      // console.log("fetching wallet-types error", error);
    },
  });

  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const onSelectAccountType = (type: number) => {
    setIsRightSubDrawerOpen(true);
    setIsRightSubDrawerContent("add-account-name");
    dispatch(setCreateWalletData({ account_type: type }));
  };

  useEffect(() => {
    if (walletTypes.length <= 0) {
      mutate(cookies.access_token);
    }
  }, [cookies.access_token]);
  // useEffect(() => {

  // }, []);

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
  {/* TODO: Implement search feature */}
  // useEffect(() => {
  //   debouncedSearch(searchTerm);
  //   return () => debouncedSearch.cancel();
  // }, [searchTerm, pinnedAccount, items, debouncedSearch]);

  if (isPending) {
    return <Loading size="large" />;
  }
  return (
    <div className="addAccount">
      <div className="searchAccount">
        <SearchIcon />
        <input type="text" value={searchTerm} onChange={handleSearch} />
      </div>
      {walletTypes.map((item) => (
          <div
            className="account-types"
            key={item?.id}
          >
            <RadioInput label={item.name} id={`${item?.id}`} checked={createWalletData?.account_type === item?.id}  onChange={() => onSelectAccountType(item.id)} />
          </div>
       
      ))}

      {/* {pinnedAccount ? (
        <MainItemCard className="AccountPinned" variant={2}>
          <div
            className="PinnedValue"
            onClick={() => onSelectAccountType(pinnedAccount.id)}
          >
       
            <IocnPlaceholder />
            <div>
              <h2>{pinnedAccount.symbol}</h2>
              <p>{pinnedAccount.name}</p>
            </div>
          </div>
          <PinnedIcon />
        </MainItemCard>
      ) : null} */}
      
    </div>
  );
};

export default AddAccountMenu;

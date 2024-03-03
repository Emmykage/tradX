import { useEffect } from "react";
import { useCookies } from "react-cookie";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { UserSliceState, setUser, setUserLoading } from "@store/slices/user";
import {
  WalletSliceState,
  setSelectedWallet,
  setWallets,
  setWalletsLoading,
} from "@store/slices/wallet";

import useProfile from "api/user/useProfile";
import useWallet from "api/wallet/useWallet";

/**
 * Custom hook to initialize user and wallet data upon login.
 * Fetches data from corresponding APIs and updates the Redux store.
 * Ensures data is fetched only if not already available.
 *
 * @returns {Object} An object containing user and wallet data.
 */
const useInitializeData = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);

  // Fetch user data
  const { user } = useAppSelector(
    (state: { user: UserSliceState }) => state.user
  );
  const { mutate: profileMutate } = useProfile({
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
    onError: () => {},
  });

  // Fetch wallet data
  const { wallets } = useAppSelector(
    (state: { wallet: WalletSliceState }) => state.wallet
  );
  const { mutate: walletMutate } = useWallet({
    onSuccess: (data) => {
      dispatch(setWallets(data));
      dispatch(setSelectedWallet(data[0]));
    },
    onError: (error) => {
      console.log("fetching wallets error", error);
    },
  });

  // Effect to fetch user data on login initialization
  useEffect(() => {
    if (cookies.access_token && (!user || Object.keys(user).length === 0)) {
      setUserLoading(true);
      profileMutate(cookies.access_token);
    }
  }, [cookies.access_token, profileMutate, user]);

  // Effect to fetch wallet data on login initialization
  useEffect(() => {
    if (cookies.access_token && (!wallets || wallets.length === 0)) {
      setWalletsLoading(true);
      walletMutate(cookies.access_token);
    }
  }, [cookies.access_token, walletMutate, wallets]);

  return { user, wallets };
};

export default useInitializeData;

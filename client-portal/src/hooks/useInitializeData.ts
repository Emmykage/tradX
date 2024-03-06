import { useEffect } from "react";
import { useCookies } from "react-cookie";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { UserSliceState, setUser, setUserLoading, setWSTicket } from "@store/slices/user";
import {
  WalletSliceState,
  setSelectedWallet,
  setWallets,
  setWalletsLoading,
} from "@store/slices/wallet";

import useProfile from "api/user/useProfile";
import useWallet from "api/wallet/useWallet";
import useWebSocketTicket from "api/user/useWebSocketTicket";

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
      dispatch(setWallets(data.results));
      dispatch(setSelectedWallet(data.results[0] || undefined));
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
  }, [cookies.access_token, walletMutate]);

  // GET the web-socket ticket for validation after the app running
  const { mutate: webSocketTicketMutate } = useWebSocketTicket({
    onSuccess: (data) => {
      if (data?.ws_ticket) {
        dispatch(setWSTicket(data?.ws_ticket));
      }
    },
  });

  useEffect(() => {
    // Get the Web Socket Ticket Key
    if (cookies.access_token) {
      webSocketTicketMutate(cookies.access_token);
    }
  }, [cookies.access_token]);

  return { user, wallets };
};

export default useInitializeData;

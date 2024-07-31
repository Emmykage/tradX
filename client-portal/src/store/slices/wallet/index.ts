import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWallet, IWalletType } from "@interfaces";
import { InitialAccountsList, InitialAccountsListProps } from "pages/private/platform/platformMenus/add-account/constants";

interface WalletData {
  account_type?: number;
  name?: string;
}

export interface WalletSliceState {
  wallets: IWallet[];
  walletsLoading: boolean;
  selectedWallet?: IWallet;
  walletTypes: IWalletType[];
  createWalletData?: WalletData;
  walletToTransferFrom: InitialAccountsListProps;
  walletToTransferTo: InitialAccountsListProps;
}

const initialState: WalletSliceState = {
  wallets: [],
  walletsLoading: false,
  walletTypes: [],
  walletToTransferFrom: InitialAccountsList[0],
  walletToTransferTo: {}
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallets: (state, action: PayloadAction<IWallet[]>) => {
      state.wallets = [...action.payload];
      state.walletsLoading = false;
      return state;
    },
    setWalletsLoading: (state, action: PayloadAction<boolean>) => {
      state.walletsLoading = action.payload;
      return state;
    },
    setSelectedWallet: (state, action: PayloadAction<IWallet | undefined>) => {
      state.selectedWallet = action.payload;
      return state;
    },
    setWalletTypes: (state, action: PayloadAction<IWalletType[]>) => {
      state.walletTypes = [...action.payload];
      return state;
    },
    setWalletToTransferFrom: (state, action: PayloadAction<InitialAccountsListProps>) => {
      state.walletToTransferFrom = action.payload;
      return state;
    },
    setWalletToTransferTo: (state, action: PayloadAction<InitialAccountsListProps>) => {
      state.walletToTransferTo =  action.payload;
      return state;
    },
    setCreateWalletData: (state, action: PayloadAction<WalletData>) => {
      state.createWalletData = { ...state.createWalletData, ...action.payload };
      return state;
    },
  },
});

export const {
  setWallets,
  setWalletsLoading,
  setSelectedWallet,
  setWalletToTransferFrom,
  setWalletToTransferTo,
  setWalletTypes,
  setCreateWalletData,
} = walletSlice.actions;

export default walletSlice.reducer;

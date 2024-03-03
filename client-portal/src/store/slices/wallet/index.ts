import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWallet, IWalletType } from "@interfaces";

interface WalletData {
  account_type?: number;
  name?: string;
}

export interface WalletSliceState {
  wallets: IWallet[];
  walletsLoading: boolean;
  walletTypes: IWalletType[];
  createWalletData?: WalletData;
}

const initialState: WalletSliceState = {
  wallets: [],
  walletsLoading: false,
  walletTypes: [],
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
    setWalletTypes: (state, action: PayloadAction<IWalletType[]>) => {
      state.walletTypes = [...action.payload];
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
  setWalletTypes,
  setCreateWalletData,
} = walletSlice.actions;

export default walletSlice.reducer;

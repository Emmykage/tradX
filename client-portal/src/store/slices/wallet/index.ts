import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWallet, IWalletType } from "@interfaces";

interface WalletData {
  account_type?: number;
  name?: string;
}

export interface WalletSliceState {
  wallets: IWallet[];
  walletTypes: IWalletType[];
  createWalletData?: WalletData;
}

const initialState: WalletSliceState = {
  wallets: [],
  walletTypes: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallets: (state, action: PayloadAction<IWallet[]>) => {
      state.wallets = [...action.payload];
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

export const { setWallets, setWalletTypes, setCreateWalletData } =
  walletSlice.actions;

export default walletSlice.reducer;

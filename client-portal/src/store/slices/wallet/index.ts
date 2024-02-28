import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWallet, IWalletType } from "@interfaces";

export interface WalletSliceState {
  wallets: IWallet[];
  walletTypes: IWalletType[];
  createWalletData?: { account_type: number };
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
    setCreateWalletData: (
      state,
      action: PayloadAction<{ account_type: number }>
    ) => {
      state.createWalletData = { ...state.createWalletData, ...action.payload };
      return state;
    },
  },
});

export const { setWallets, setWalletTypes, setCreateWalletData } =
  walletSlice.actions;

export default walletSlice.reducer;

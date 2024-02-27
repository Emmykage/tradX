import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWallet } from "@interfaces";

export interface WalletSliceState {
  wallets: IWallet[] | [];
}

const initialState: WalletSliceState = {
  wallets: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallets: (state, action: PayloadAction<IWallet[]>) => {
      state.wallets = [...action.payload];
      return state;
    },
  },
});

export const { setWallets } = walletSlice.actions;

export default walletSlice.reducer;

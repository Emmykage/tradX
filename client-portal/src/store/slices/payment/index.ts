import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WalletSliceState {
  amount: number;
  walletId: string | null;
  selectedTransactionId: string | null;
}

const initialState: WalletSliceState = {
  amount: 0,
  walletId: null,
  selectedTransactionId: null,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
      return state;
    },
    setWalletId: (state, action: PayloadAction<string>) => {
      state.walletId = action.payload;
      return state;
    },
    setTransactionId: (state, action: PayloadAction<string | null>) => {
      state.selectedTransactionId = action.payload;
      return state;
    },
  },
});

export const { setPaymentAmount, setWalletId, setTransactionId } =
  paymentSlice.actions;

export default paymentSlice.reducer;

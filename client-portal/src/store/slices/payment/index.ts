import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { paymentMethodData } from "pages/private/platform/platformMenus/paymentMethod/constants";

export interface WalletSliceState {
  amount: number;
  walletId: string | null;
  selectedTransactionId: string | null;
  selectedPaymentMethod: {name: string, methodIcon: any} | null;
}

const initialState: WalletSliceState = {
  amount: 0,
  walletId: null,
  selectedTransactionId: null,
  selectedPaymentMethod: paymentMethodData?.bankCards[0]
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
      return state;
    },
    setPaymentMethod: (state, action: PayloadAction< {name: string, methodIcon: any} | null>) => {
      state.selectedPaymentMethod = action.payload;
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

export const { setPaymentAmount, setWalletId, setTransactionId, setPaymentMethod } =
  paymentSlice.actions;

export default paymentSlice.reducer;

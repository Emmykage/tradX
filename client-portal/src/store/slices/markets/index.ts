import { createSlice } from "@reduxjs/toolkit";
import { CryptoSliceState } from "./types";
import { dateFormter } from "helpers/dateFormter";

const initialState: CryptoSliceState = {
  crypto: {
    "BTC/USD": [],
  },
  status: "idle",
  start: dateFormter(new Date()),
  timeFrame: "minute",
  sympol: "BTC/USD",
  error: null,
};
  
export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setInitialCrypto: (state, action) => {
      state.crypto = action.payload;
      return state;
    },
    setCrypto: (state, action) => {
      if (action.payload && action.payload.symbol) {
        const { symbol } = action.payload;
        state.crypto = {
          ...state.crypto,
          [symbol]: [...(state.crypto[symbol] || []), action.payload],
        };
      }
      return state;
    },
  },
});

export const { setInitialCrypto, setCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;

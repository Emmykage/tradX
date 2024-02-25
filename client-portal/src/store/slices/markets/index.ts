// TODO - Build an initial data thunks
import { createSlice } from "@reduxjs/toolkit";
import { UTCTimestamp } from "lightweight-charts";

type CryptoItem = {
  symbol: string;
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  trade_count: number;
  vwap: number;
  time: UTCTimestamp;
  value: number;
};

// Define a type for the slice state
export interface UserSliceState {
  crypto: Record<string, CryptoItem[]> ;
}

// Define the initial state using that type
const initialState: UserSliceState = {
  crypto: {
    "BTC/USD": []
  },
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

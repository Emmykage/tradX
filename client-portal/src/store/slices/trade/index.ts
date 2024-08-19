import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface TradeStates {
  duration: number;
  amount: number;
  trade: string | null;
  tradeData: any;
  finished: boolean;
  socketData: any;
  socketInstance:any;
}

// Define the initial state using that type
const initialState: TradeStates = {
  duration: 2,
  amount: 90,
  trade: null,
  tradeData: null,
  finished:false,
  socketData: {},
  socketInstance:null
  
};

export const tradeStateSlice = createSlice({
  name: "tradeState",
  initialState,
  reducers: {
    changeAmount: (state, action: PayloadAction<string>) => {
        if(action.payload == 'increase'){
            state.amount += 1 
        }else{
          state.amount -= 1 
        }
      return state;
    },
    changeDuration: (state, action: PayloadAction<string>) => {
      if(action.payload == 'increase'){
          state.duration += 1 
      }else{
        state.duration -= 1 
      }
      return state;
    },
    setSocketInstance: (state, action: PayloadAction<any>) => {
      state.amount = action.payload;
      return state;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
      return state;
    },
    SetDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
      return state;
    },
    setTrade: (state, action: PayloadAction<string | null>) => {
      state.trade = action.payload;
      return state;
    },
    setTradeData: (state, action: PayloadAction<any>) => {
      state.tradeData = action.payload;
      return state;
    },
    setFinished: (state, action: PayloadAction<boolean>) => {
      state.finished = action.payload;
      return state;
    },
    setSocketData:  (state, action: PayloadAction<any>) => {
      console.log(action.payload, 'payloadzz');
      state.socketData = action.payload;
      
      return state;
    },
  },
});

export const { setAmount, SetDuration,setTrade,setFinished,changeAmount,changeDuration, setSocketData,setSocketInstance ,setTradeData} = tradeStateSlice.actions;

export default tradeStateSlice.reducer;

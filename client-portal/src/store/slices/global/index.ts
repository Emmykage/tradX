import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface GlobalStates {
  isIdle: boolean;
}

// Define the initial state using that type
const initialState: GlobalStates = {
  isIdle: false,
};

export const globalStateSlice = createSlice({
  name: "globalStates",
  initialState,
  reducers: {
    setIsIdle: (state, action: PayloadAction<boolean>) => {
      state.isIdle = action.payload;
      return state;
    },
  },
});

export const { setIsIdle } = globalStateSlice.actions;

export default globalStateSlice.reducer;

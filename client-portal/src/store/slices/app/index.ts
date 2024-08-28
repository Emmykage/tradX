import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface AppProps {
  togglePortfolioWindow: boolean;
}

const initialState: AppProps = {
  togglePortfolioWindow: false
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPortfolioWindow: (state) => {
        console.log("clicked toggle")
      state.togglePortfolioWindow = !state.togglePortfolioWindow
    },
  
  },
});

export const { setPortfolioWindow } = appSlice.actions;

export default appSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AssetPairSliceState {
    assetPairs: any[]
}

const defaultAssetPair: any = {
    name: "Default Asset",
    image: "/menu-images/timezones/timezone-9.png",
    value: "BTC/USD",
    profit: "0%",
  };
const initialState: AssetPairSliceState = {
    assetPairs: [defaultAssetPair]
}

export  const assetPairSlice = createSlice({
    name: "asset-pairs",
    initialState,
    reducers: {
        setAssetPairs: (state, action: PayloadAction<any>) => {

            const found = state.assetPairs.find(pair => pair.name == action.payload.name)

             const exist  = found != undefined
            if (!exist){

            state.assetPairs.push(action.payload);
            return state
        }


        },

        removeAssetPair: (state, action: PayloadAction<any>) => {
            state.assetPairs = state.assetPairs.filter(pair => pair.name !== action.payload.name);
          }

    }
})


export const { setAssetPairs, removeAssetPair } = assetPairSlice.actions;

export default assetPairSlice.reducer;
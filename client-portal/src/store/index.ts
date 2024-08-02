import { configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
  marketsReducer,
  globalReducer,
  walletReducer,
  paymentReducer,
  tradeReducer,
  assetPairReducer,
  notificationReducer
} from "@slices";


export const store = configureStore({
  reducer: {
    global: globalReducer,
    trades: tradeReducer,
    user: userReducer,
    markets: marketsReducer,
    wallet: walletReducer,
    payment: paymentReducer,
    assetPair: assetPairReducer,  
    notification: notificationReducer
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

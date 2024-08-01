import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface NotificationSliceState {
  notificationList: [];
  notificationsLoading: boolean;

}

const initialState: NotificationSliceState = {
  notificationList: [],
  notificationsLoading: false,

};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotificationList: (state, action: PayloadAction<[]>) => {
      state.notificationList = action.payload;
      return state;
    },
    updateNotificationList : (state, action: PayloadAction<[]>) => {
        state.notificationList = action.payload;
        return state;
    },
    
  },
});

export const { setNotificationList, updateNotificationList } =
notificationSlice.actions;

export default notificationSlice.reducer;

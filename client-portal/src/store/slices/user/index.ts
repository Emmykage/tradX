import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@interfaces";
import { fetctUser, handlers } from "./thunk";

// Define a type for the slice state
export interface UserSliceState {
  user: IUser;
  loading: boolean;
}

// Define the initial state using that type
const initialState: UserSliceState = {
  user: {},
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    //GET USER EXAMPLE
    builder.addCase(fetctUser.pending, handlers.user.pending);
    builder.addCase(fetctUser.fulfilled, handlers.user.success);
    builder.addCase(fetctUser.rejected, handlers.user.rejected);
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

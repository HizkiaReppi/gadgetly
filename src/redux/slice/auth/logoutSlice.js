import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../../../utils/auth";

const logoutSlice = createSlice({
  name: "logout",
  initialState: authInitialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.status = "idle";
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
    },
  },
});

export const { logout } = logoutSlice.actions;

export default logoutSlice.reducer;

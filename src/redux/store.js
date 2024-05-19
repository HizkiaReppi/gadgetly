import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import loginReducer from "./slice//auth/loginSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slice/auth/registerSlice";
import loginReducer from "./slice/auth/loginSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});

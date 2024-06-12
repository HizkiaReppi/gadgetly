import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slice/auth/registerSlice";
import loginReducer from "./slice/auth/loginSlice";
import logoutReducer from "./slice/auth/logoutSlice";
import cartReducer from "./slice/cartSlice";
import checkoutReducer from "./slice/checkoutSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    logout: logoutReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

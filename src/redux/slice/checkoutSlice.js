import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutData: JSON.parse(localStorage.getItem("checkout")) || [],
  shippingInfo: JSON.parse(localStorage.getItem("shipping_information")) || {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
      localStorage.setItem(
        "shipping_information",
        JSON.stringify(state.shippingInfo),
      );
    },
    updateCheckoutData: (state, action) => {
      state.checkoutData = action.payload;
      localStorage.setItem("checkout", JSON.stringify(state.checkoutData));
    },
  },
});

export const { addShippingInfo, updateCheckoutData } = checkoutSlice.actions;
export default checkoutSlice.reducer;

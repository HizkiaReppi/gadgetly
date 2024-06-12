import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutData: JSON.parse(localStorage.getItem("checkout")) || [],
  shippingInfo: JSON.parse(localStorage.getItem("shipping_information")) || [],
};

const checkoutSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addShippingInfo: (state, action) => {
      state.shippingInfo.push(action.payload);

      localStorage.setItem(
        "shipping_information",
        JSON.stringify(state.shippingInfo),
      );
    },
  },
});

export const { addShippingInfo } = checkoutSlice.actions;

export default checkoutSlice.reducer;

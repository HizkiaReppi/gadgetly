import { createSlice } from "@reduxjs/toolkit";
import { updateCheckoutData } from "./checkoutSlice";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
  checkoutData: JSON.parse(localStorage.getItem("checkout")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleProduct: (state, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload
          ? { ...product, checked: !product.checked }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    setCheckoutData: (state, action) => {
      state.checkoutData = action.payload;
      localStorage.setItem("checkout", JSON.stringify(state.checkoutData));
    },
    addToCart: (state, action) => {
      const itemInCart = state.products.find(
        product => product.id === action.payload.id
      );
      if (!itemInCart) {
        state.products.push({
          ...action.payload,
          checked: false,
        });
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
  },
});

export const checkout = () => (dispatch, getState) => {
  const { products } = getState().cart;
  const checkoutData = products.filter(product => product.checked);
  
  dispatch(cartSlice.actions.setCheckoutData(checkoutData));
  dispatch(updateCheckoutData(checkoutData));
};

export const { toggleProduct, removeProduct, setCheckoutData, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;

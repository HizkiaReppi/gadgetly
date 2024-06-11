import { createSlice } from "@reduxjs/toolkit";
import productImage from "../../assets/homepage/product-image.png";

const initialState = {
  products: [
    {
      id: 1,
      name: "Iphone 12",
      color: "White",
      storage: "128GB",
      ram: "8GB",
      condition: "NORMAL",
      price: 7000000,
      image: productImage,
      checked: true,
      warranty: false,
    },
    {
      id: 2,
      name: "Iphone 13",
      color: "Blue",
      storage: "256GB",
      ram: "16GB",
      condition: "NORMAL",
      price: 7000000,
      image: productImage,
      checked: true,
      warranty: true,
    },
    {
      id: 3,
      name: "Iphone 12 Pro Max",
      color: "Violet Blue",
      storage: "256GB",
      ram: "16GB",
      condition: "NORMAL",
      price: 7000000,
      image: productImage,
      checked: true,
      warranty: true,
    },
  ],
  checkoutData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleProduct: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.checked = !product.checked;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
    checkout: (state) => {
      state.checkoutData = state.products.filter((product) => product.checked);
    },
  },
});

export const { toggleProduct, removeProduct, checkout } = cartSlice.actions;

export default cartSlice.reducer;

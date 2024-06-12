import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
  checkoutData: JSON.parse(localStorage.getItem("checkout")) || [],
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

      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );

      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    checkout: (state) => {
      state.checkoutData = state.products.filter((product) => product.checked);

      localStorage.setItem("checkout", JSON.stringify(state.checkoutData));
    },
    addToCart: (state, action) => {
      const itemInCart = state.products.find(
        (product) => product.id === action.payload,
      );
      if (!itemInCart) {
        state.products.push({
          id: action.payload.id,
          checked: false,
          warranty: action.payload.warranty,
          price: action.payload.price,
        });

        localStorage.setItem("cart", JSON.stringify(state.products));
      } else {
        return false;
      }
    },
  },
});

export const { toggleProduct, removeProduct, checkout, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;

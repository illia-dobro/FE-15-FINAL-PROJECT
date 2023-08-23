import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      state.products = action.payload;
    },

    addToCart: (state, action) => {
      const filteredExistingProduct = state.products.find(
        (product) => product.product._id === action.payload.product._id
      );
      if (filteredExistingProduct) {
        if (
          filteredExistingProduct.cartQuantity <
          filteredExistingProduct.product.quantity
        ) {
          filteredExistingProduct.cartQuantity += action.payload.cartQuantity;
        }
      } else {
        state.products.push({
          ...action.payload,
          cartQuantity: action.payload.cartQuantity,
        });
      }
    },

    decreaseQty: (state, action) => {
      const productIdToRemove = action.payload.product._id;
      const itemToRemove = state.products.find(
        (product) => product.product._id === productIdToRemove
      );

      if (itemToRemove && itemToRemove.cartQuantity > 1) {
        itemToRemove.cartQuantity -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product.product._id !== productIdToRemove
        );
      }
    },

    removeProduct: (state, action) => {
      const productIdToRemove = action.payload.product._id;
      const removedProduct = state.products.find(
        (product) => product.product._id === productIdToRemove
      );

      if (removedProduct) {
        state.products = state.products.filter(
          (product) => product.product._id !== productIdToRemove
        );
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { initializeCart, addToCart, decreaseQty, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;

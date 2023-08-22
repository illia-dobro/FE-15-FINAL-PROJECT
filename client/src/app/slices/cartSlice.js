import { createSlice } from "@reduxjs/toolkit";
import cartApi from "../services/cartApi.js";

const initialState = {
  products: [],
  // cartQty: null,
  total: 0,
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
          filteredExistingProduct.cartQuantity += 1;
        }
      } else {
        state.products.push({ ...action.payload, cartQuantity: 1 });
      }

      // localStorage.setItem("products", JSON.stringify(state.products));
    },
    /*    updateCart: (state, action) => {

      state.products = [action.payload];

      localStorage.setItem('products', JSON.stringify(state.products));

    }, */
    removeFromCart: (state, action) => {
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

      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeAllOfProduct: (state, action) => {
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
    calculateTotal: (state) => {
      state.total = state.products.reduce((total, product) => {
        return total + product.product.currentPrice * product.cartQuantity;
      }, 0);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     cartApi.endpoints.getCart.matchFulfilled,
  //     (state, action) => {
  //       const products = action.payload.products;
  //       state.cartQty = products.reduce(
  //         (total, product) => total + product.cartQuantity,
  //         0
  //       );
  //     }
  //   );
  // },
});

export const {
  initializeCart,
  addToCart,
  updateCart,
  removeFromCart,
  calculateTotal,
  removeAllOfProduct,
} = cartSlice.actions;

export default cartSlice.reducer;

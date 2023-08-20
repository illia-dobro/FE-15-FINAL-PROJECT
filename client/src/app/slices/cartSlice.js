import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [],
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const existingProduct = state.products.find(product => product.product._id === action.payload.product._id);
      if (existingProduct) {
      existingProduct.cartQuantity += 1;
      } 
      else {
      state.products.push({ ...action.payload, cartQuantity: 1 });
      }

      localStorage.setItem('products', JSON.stringify(state.products));

    },
    updateCart: (state, action) => {
      
      state.products = action.payload.products;
      localStorage.setItem('products', JSON.stringify(state.products));
  
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload.product._id;
      const itemToRemove = state.products.find((product) => product.product._id === productIdToRemove);
      
      if (itemToRemove && itemToRemove.cartQuantity > 1) {
      itemToRemove.cartQuantity -= 1;
      } 
      else {
      state.products = state.products.filter((product) => product.product._id !== productIdToRemove);
      }

      localStorage.setItem('products', JSON.stringify(state.products)); 
    },
    removeAllOfProduct: (state, action) => {
      const productIdToRemove = action.payload.product._id;
      const removedProduct = state.products.find((product) => product.product._id === productIdToRemove);

      if (removedProduct) {
      state.products = state.products.filter((product) => product.product._id !== productIdToRemove);
      localStorage.setItem('products', JSON.stringify(state.products));
      }
    },
    calculateTotal: (state) => {
      state.total = state.products.reduce((total, product) => {
      return total + product.product.currentPrice * product.cartQuantity;
      }, 0);
    }
  }
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  calculateTotal,
  removeAllOfProduct
} = cartSlice.actions;

export default cartSlice.reducer;

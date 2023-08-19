import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")): [],
  quantity: 0,
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
      } else {
        state.products.push({ ...action.payload, cartQuantity: 1 });
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },

  },
});

export const {
  addToCart
} = cartSlice.actions;

export default cartSlice.reducer;

/*
removeFromCart: (state, action) => {
const itemToRemoved = state.cartItems.find((item) => item._id === action.payload);
if (itemToRemoved) {
if (itemToRemoved.cartQuantity > 1) {
state.quantity -= 1;
state.total -= itemToRemoved.currentPrice;
} else {
state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
}
}
}, 
*/
/*     
state.quantity = state.products.reduce((sum, item) => sum + item.product.cartQuantity, 0);
state.total = state.products.reduce((sum, item) => sum + item.product.currentPrice * item.product.cartQuantity, 0);  
*/
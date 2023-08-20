import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems"))
		: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += action.payload.cartQuantity;
			} else {
				const tempProduct = { ...action.payload };
				state.cartItems.push(tempProduct);
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		removeFromCart: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
	},
});

export const {
	addToCart,
	removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;

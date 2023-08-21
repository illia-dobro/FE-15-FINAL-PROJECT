// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: [], // Список товарів у корзині
	},
	reducers: {
		addToCart: (state, action) => {
			const { itemId, cartQuantity } = action.payload;
			// Перевіряємо, чи товар вже є в корзині
			const existingItem = state.cartItems.find((item) => item._id === itemId);

			if (existingItem) {
				// Якщо товар вже є, збільшуємо кількість
				existingItem.cartQuantity += cartQuantity;
			} else {
				// Якщо товару немає, додаємо його до корзини
				state.cartItems.push({ _id: itemId, cartQuantity });
			}
		},
		removeFromCart: (state, action) => {
			const itemIdToRemove = action.payload;
			state.cartItems = state.cartItems.filter(
				(item) => item._id !== itemIdToRemove
			);
		},
		updateCartItemQuantity: (state, action) => {
			const { itemId, quantity } = action.payload;
			const itemToUpdate = state.cartItems.find((item) => item._id === itemId);
			if (itemToUpdate) {
				// Перевірка, чи кількість не від'ємна
				if (quantity >= 0) {
					itemToUpdate.cartQuantity = quantity;
				}
			}
		},
	},
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;

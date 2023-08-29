import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: {},
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
	},
});

export const selectProducts = (state) => state.products.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
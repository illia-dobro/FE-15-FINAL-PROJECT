import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, { payload: { data } }) => {
      state.data = data;
    },
  },
});

export default productsSlice.reducer;

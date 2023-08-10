import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    id: "product_type",
    name: "Product Type",
    options: [],
  },
  reducers: {
    setProductTypes: (state, action) => {
      state.options = [
        ...new Set(action.payload.map((product) => product.product_type)),
      ];
    },
  },
});

export const { setProductTypes } = filtersSlice.actions;

export default filtersSlice.reducer;

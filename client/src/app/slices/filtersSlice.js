import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    id: "product_type",
    name: "Product Type",
    options: [],
  },
  reducers: {
    productTypes: (state, action) => {
      const uniqueProductTypes = [
        ...new Set(action.payload.map((product) => product.product_type)),
      ];

      state.options = uniqueProductTypes.map((option) => ({
        value: option,
        label: option.toUpperCase(),
        checked: false,
      }));
    },
  },
});

export const { productTypes } = filtersSlice.actions;

export default filtersSlice.reducer;

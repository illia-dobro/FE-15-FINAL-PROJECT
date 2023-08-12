import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: [],
  reducers: {
    setCategories: (state, { payload: { categories } }) => {
      state.categories = categories;
    },
  },
});

export const { setCategories } = catalogSlice.actions;

export default catalogSlice.reducer;

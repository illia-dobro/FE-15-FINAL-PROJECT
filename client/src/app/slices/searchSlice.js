import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchOpened: false,
  searchQuery: { query: "" },
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    toggleSearch: (state) => {
      state.isSearchOpened = !state.isSearchOpened;
      if (state.searchQuery.query) state.searchQuery.query = "";
    },
    setSearchQuery: (state, action) => {
      state.searchQuery.query = action.payload;
    },
  },
});

export const { toggleSearch, setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;

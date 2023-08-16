import { createSlice } from "@reduxjs/toolkit";
import { joinFiltersQuery } from "../../helpers/joinFiltersQuery.js";

const initialState = {
  activeFilters: {},
  filtersQuery: "",
  productTypes: {
    id: "product_type",
    name: "Product Type",
    options: [],
  },
  sort: {
    id: "sort",
    name: "Sort",
    options: [],
  },
  priceRange: {
    min: null,
    max: null,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    updateFiltersQuery: (state) => {
      state.filtersQuery = joinFiltersQuery(state.activeFilters);
    },

    clearFilters: (state) => {
      state.filtersQuery = "";
      state.activeFilters = {};
    },

    productTypes: (state, action) => {
      // const uniqueProductTypes = [
      //   ...new Set(action.payload.map((product) => product.product_type)),
      // ];

      // ----------------
      //@TODO temporary solution for product type filter
      let uniqueProductTypes;
      switch (action.payload) {
        case "Bodycare":
          uniqueProductTypes = [
            "cream",
            "lotion",
            "butter",
            "balm",
            "serum",
            "oil",
          ];
          break;
        case "Facecare":
          uniqueProductTypes = [
            "mask",
            "serum",
            "cleanser",
            "toner",
            "essence",
          ];
          break;
        case "Haircare":
          uniqueProductTypes = ["shampoo", "mask", "cream", "spray"];
          break;
      }
      // ------------------

      state.productTypes.options = uniqueProductTypes.map((option) => ({
        value: option,
        label: option.toUpperCase(),
        checked: false,
      }));
    },
    changeActiveFilter: (state, action) => {
      const { name, value } = action.payload;

      if (state.activeFilters[name]?.includes(value)) {
        state.activeFilters[name] = state.activeFilters[name].filter(
          (item) => item !== value
        );

        if (state.activeFilters[name].length === 0)
          delete state.activeFilters[name];
      } else {
        state.activeFilters = {
          ...state.activeFilters,
          [name]: [...(state.activeFilters[name] || []), value],
        };
      }
    },

    changeActiveSingleFilter: (state, action) => {
      const { name, value } = action.payload;

      state.activeFilters[name] = value;
    },

    setPriceRangeBounds: (state, action) => {
      const { min, max } = action.payload;

      state.priceRange.min = min;
      state.priceRange.max = max;
    },

    setCurrentPriceBound: (state, action) => {
      const { name, value } = action.payload;
      state.activeFilters[name] = value;
    },
  },
});

export const {
  updateFiltersQuery,
  clearFilters,
  changeActiveFilter,
  changeActiveSingleFilter,
  setPriceRangeBounds,
  setCurrentPriceBound,
  productTypes,
} = filtersSlice.actions;

export default filtersSlice.reducer;

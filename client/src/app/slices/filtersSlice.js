import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilters: {},
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
    currentMin: null,
    currentMax: null,
    max: null,
    isSetByUser: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    productTypes: (state, action) => {
      const uniqueProductTypes = [
        ...new Set(action.payload.map((product) => product.product_type)),
      ];

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

      const { currentMin, currentMax, isSetByUser } = state.priceRange;

      if (!currentMin) state.priceRange.currentMin = min;
      if (!currentMax) state.priceRange.currentMax = max;

      if (isSetByUser) {
        state.priceRange.currentMin = Math.max(min, Math.min(currentMin, max));
        state.priceRange.currentMax = Math.min(max, Math.max(currentMax, min));
      } else {
        state.priceRange.currentMin = min;
        state.priceRange.currentMax = max;
      }
    },

    setCurrentPriceRange: (state, action) => {
      const [min, max] = action.payload;
      state.priceRange.currentMin = min;
      state.priceRange.currentMax = max;
      state.priceRange.isSetByUser = true;
    },
  },
});

export const {
  changeActiveFilter,
  changeActiveSingleFilter,
  setPriceRangeBounds,
  setCurrentPriceRange,
  productTypes,
} = filtersSlice.actions;

export default filtersSlice.reducer;

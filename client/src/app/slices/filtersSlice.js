import { createSlice } from "@reduxjs/toolkit";
import { joinFiltersQuery } from "../../helpers/joinFiltersQuery.js";
import { FaArrowsToDot } from "react-icons/fa6";

const initialState = {
  activeFilters: {},
  filtersQuery: "",
  sort: {
    id: "sort",
    name: "Sort",
    options: [],
  },
  priceRange: {
    min: null,
    max: null,
  },
  perPage: 4,
  startPage: 1,
  productTypes: {
    id: "product_type",
    name: "Product Type",
    options: [],
  },
  manufacturerCountry: {
    id: "manufacturerCountry",
    name: "Manufacturer Country",
    options: [
      { value: "UA", label: "UA", checked: false },
      { value: "USA", label: "USA", checked: false },
    ],
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

    setPerPage: (state) => {
      // @TODO add selector
      console.log("hooo");
      state.activeFilters.perPage = state.perPage;
    },

    changePage: (state, action) => {
      state.activeFilters.startPage
        ? (state.activeFilters.startPage += action.payload)
        : (state.activeFilters.startPage = state.startPage + action.payload);
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
  setPerPage,
  changePage,
} = filtersSlice.actions;

export default filtersSlice.reducer;

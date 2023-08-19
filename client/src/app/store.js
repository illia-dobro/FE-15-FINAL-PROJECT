import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import filtersReducer from "./slices/filtersSlice";
import { api } from "./services/api";
import productApi from "./services/productApi";
import catalogApi from "./services/catalogApi";
import searchReducer from "./slices/searchSlice.js";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    search: searchReducer,
    [api.reducerPath]: api.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      productApi.middleware,
      catalogApi.middleware
    ),
});

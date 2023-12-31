import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import filtersReducer from "./slices/filtersSlice";
import productsReducer from "./slices/productsSlice";
import { api } from "./services/api";
import productApi from "./services/productApi";
import catalogApi from "./services/catalogApi";
import cartApi from "./services/cartApi";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice.js";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    cart: cartReducer,
    search: searchReducer,
    [api.reducerPath]: api.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      productApi.middleware,
      catalogApi.middleware,
      cartApi.middleware,
    ),
});

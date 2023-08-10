import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import filtersReducer from "./slices/filtersSlice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

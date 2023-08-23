import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";
import { getLocalStorage } from "../../helpers/localStorage";

const initToken = getLocalStorage() || null;

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, user: null, token: initToken },
  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setCredentials: (state, { payload: { user, token } }) => {
      state.isLoggedIn = true;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      api.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
      }
    );
    builder.addMatcher(
      api.endpoints.updateUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export const { setLoggedIn, setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const isTokenUser = (state) => state.auth.token;

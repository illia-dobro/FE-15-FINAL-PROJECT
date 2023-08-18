import { createSlice } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { getLocalStorage } from '../../helpers/localStorage';

const initToken = getLocalStorage() || null;

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: initToken },
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      api.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
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

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;

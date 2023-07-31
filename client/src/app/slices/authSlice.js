import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null }
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }
    ) => {
      state.user = user
      state.token = token
    },
    logout: (state) => {
      state.user = null
      state.token = null
    }
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
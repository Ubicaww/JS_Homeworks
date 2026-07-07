import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('rozetka_token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('rozetka_token', action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('rozetka_token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
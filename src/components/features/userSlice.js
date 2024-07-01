// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userType: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userType = action.payload;
    },
    logout: (state) => {
      state.userType = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

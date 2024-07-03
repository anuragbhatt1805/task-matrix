import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: null,
};
const authSlice =createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userType = action.payload.userType;
        },
        logout: (state) => {
            state.userType = null;
        },
    },
})

export const {login, logout}=authSlice.actions

export default authSlice.reducer
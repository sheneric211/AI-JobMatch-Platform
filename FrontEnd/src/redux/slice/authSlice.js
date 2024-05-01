import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'account',
    initialState: {
        loading: false,
        error: false,
        currentUser: null,
        success: false,
    },
    reducers: {
        // Login
        loginStart: (state) =>{
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        // Create
        createStart: (state) =>{
            state.loading = true;
        },
        createSuccess: (state) => {
            state.loading = false;
            state.success = true;
        },
        createFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        // Logout
        logoutSuccess: (state) => {
            state.loading = false;
            state.currentUser = null;
        },
    }
})

export const { 
    loginStart,
    loginFail,
    loginSuccess,
    createStart,
    createSuccess,
    createFail,
    logoutSuccess
} = authSlice.actions;

export default authSlice.reducer;
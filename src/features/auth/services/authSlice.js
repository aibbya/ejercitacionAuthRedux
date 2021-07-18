import { createSlice } from '@reduxjs/toolkit';

// AUTH STATE
const authState = {
    token: "",
    error: "",
    user: {},
    loading: false,
    state: null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        logSuccess: (state, action) => {
            localStorage.setItem("token", action.payload.token);
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
            state.error = ""
            state.state = "success";

        },
        logError: (state, action) => {
            state.error = action.payload.message;
            state.state = "error";
            state.loading = false;
            state.token = '';
            localStorage.removeItem("token")
        }

    },
})

export const { logSuccess, logError } = authSlice.actions

export const selectAuth = state => state.auth;

export default authSlice.reducer
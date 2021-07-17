import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from './authService';



export const signInUser = createAsyncThunk(
    "auth/signInUser",
    async (values, { rejectWithValue }) => {
        console.log("algo", values);
        try {
            const response = await login(values);
            console.log("respom", response);
            // if (response.data.error) {
            //     console.log("1",response.data);
            //     // return rejectWithValue(response.data);
            // } else {
            //     console.log("2",response.data.data);
            //     // return response.data.data;
            // }
        } catch (error) {
            console.log("Error", error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

const authState = {
    token: "",
    error: "",
    user: {},
    loading: false,
    state: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        logoutSuccess: (state, action) => {
            state.token = ''
            state.user = {}
            localStorage.removeItem("token")
            state.state = "success"
        },
        // loginSuccess: (state, action) => {
        //     state.user = action.payload.user;
        //     state.token = action.payload.token;
        //     state.loading = false;
        //     state.state = "success";
        // },
    },
    extraReducers: {
        //signInUser
        [signInUser.pending]: state => {
            state.loading = true
        },
        [signInUser.fulfilled]: (state, { payload }) => {
            // localStorage.setItem("token", payload.token);
            // state.token = payload.token;
            // state.user = payload.user;
            state.loading = false;
            state.state = "success";
        },
        [signInUser.rejected]: (state, { payload }) => {
            state.error = payload.message;
            state.state = "error";
            state.loading = false;
        },
    },
});

export const { logoutSuccess } = authSlice.actions;

export const selectAuth = state => state.auth;

export default authSlice.reducer;
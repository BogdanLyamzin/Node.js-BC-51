import { createSlice } from "@reduxjs/toolkit";

import { signin, signout, current } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(signin.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signin.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        })
        .addCase(signin.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(current.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(current.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        })
        .addCase(current.rejected, (state, {payload}) => {
            state.loading = false;
            state.token = "";
            state.error = payload;
        })
        .addCase(signout.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signout.fulfilled, (state) => {
            state.loading = false;
            state.user = {};
            state.token = "";
            state.isLogin = false;
        })
        .addCase(signout.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export default authSlice.reducer;
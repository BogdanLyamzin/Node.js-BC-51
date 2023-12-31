import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/auth";

export const signin = createAsyncThunk(
    "auth/signin",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signin(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)

export const signout = createAsyncThunk(
    "auth/signout",
    async (_, { rejectWithValue }) => {
        try {
            const result = await api.signout();
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const result = await api.getCurrent(auth.token);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    },
    
    {
        condition: (_, { getState }) => {
            const {auth} = getState();
            if(!auth.token) {
                return false;
            }
        }
    }
)
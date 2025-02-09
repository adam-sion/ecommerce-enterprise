import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authApi = axios.create({
    baseURL: `${import.meta.env.VITE_JTV_SERVER_URL}/auth`
});

// Login action
export const login = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
    try {
        const response = await authApi.post("/login", userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
});

// Signup action
export const signup = createAsyncThunk("auth/signup", async (userData, { rejectWithValue }) => {
    try {
        const response = await authApi.post("/signup", userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Signup error:", error);
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
});

// Verify register action
export const verifyRegister = createAsyncThunk("auth/verify", async (token, { rejectWithValue }) => {
    try {
        const response = await authApi.get("/verify", { withCredentials: true, params: { token } });
        return response.data;
    } catch (error) {
        console.error("Verification error:", error);
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
});

// Slice definition
const authSlice = createSlice({
    name: "auth",
    initialState: {
        loginLoading: false,
        signupLoading: false,
        verifyRegisterLoading: false,
        loginError: null,
        signupError: null,
        verifyRegisterError: null
    },
    reducers: {
        resetError: (state) => {
            state.loginError = null;
            state.signupError = null;
            state.verifyRegisterError = null;
        },
        resetLoading: (state) => {
            state.loginLoading = false;
            state.signupLoading = false;
            state.verifyRegisterLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loginLoading = true;
                state.loginError = null;
            })
            .addCase(login.fulfilled, (state) => {
                state.loginLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.loginLoading = false;
                state.loginError = action.payload;
            })
            .addCase(signup.pending, (state) => {
                state.signupLoading = true;
                state.signupError = null;
            })
            .addCase(signup.fulfilled, (state) => {
                state.signupLoading = false;
            })
            .addCase(signup.rejected, (state, action) => {
                state.signupLoading = false;
                state.signupError = action.payload;
            })
            .addCase(verifyRegister.pending, (state) => {
                state.verifyRegisterLoading = true;
                state.verifyRegisterError = null;
            })
            .addCase(verifyRegister.fulfilled, (state) => {
                state.verifyRegisterLoading = false;
            })
            .addCase(verifyRegister.rejected, (state, action) => {
                state.verifyRegisterLoading = false;
                state.verifyRegisterError = action.payload;
            });
    }
});

export default authSlice.reducer;
export const { resetError, resetLoading } = authSlice.actions;

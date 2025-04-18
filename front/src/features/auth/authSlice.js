import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { client } from "../../ApolloClient";

const authApi = axios.create({
    baseURL: `${import.meta.env.VITE_JTV_SERVER_URL}/auth`
});

const GET_USER_QUERY = gql`
    query GetUser {
        me {
            username
            email
            picture
            role
        }
    }
`;

export const getUser = createAsyncThunk("auth/getUser", async (_, { rejectWithValue }) => {
    try {
        const { data } = await client.query({
            query: GET_USER_QUERY,
        });
        return data.me;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


// Login action
export const login = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
    try {
        const response = await authApi.post("/login", userData, { withCredentials: true });
    
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
});

export const logout = createAsyncThunk("auth/logout", async (userData, { rejectWithValue }) => {
    try {
        const response = await authApi.post("/logout", userData, { withCredentials: true });
    
       return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
});

// Signup action
export const signup = createAsyncThunk("auth/signup", async (userData, { rejectWithValue }) => {
    try {
        const response = await authApi.post("/signup", userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
});

// Verify register action
export const verifyRegister = createAsyncThunk("auth/verify", async (token, { rejectWithValue }) => {
    try {
        const response = await authApi.get("/verify", { withCredentials: true, params: { token } });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message);
    }
});

export const refreshToken = createAsyncThunk("auth/refreshToken", async () => {
    try {
        const response = await authApi.post("/refresh-token", {}, { withCredentials: true });
        return response.data;
    } catch (error) {
    }
});

// Slice definition
const authSlice = createSlice({
    name: "auth",
    initialState: {
        loginLoading: false,
        logoutLoading: false,
        signupLoading: false,
        verifyRegisterLoading: false,
        loginError: null,
        logoutError:null,
        signupError: null,
        verifyRegisterError: null,
        user: null,
        isAdmin:null,
        userLoading: false,
        userError: null,
    },
    reducers: {
        resetError: (state) => {
            state.loginError = null;
            state.logoutError = null;
            state.signupError = null;
            state.verifyRegisterError = null;
        },
        resetLoading: (state) => {
            state.loginLoading = false;
            state.logoutLoading = false;
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
            .addCase(login.fulfilled, (state, action) => {
                state.loginLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.loginLoading = false;
                state.loginError = action.payload;
            })
            .addCase(logout.pending, (state) => {
                state.logoutLoading = true;
                state.logoutError = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.logoutLoading = false;
                state.user = null;
                state.isAdmin=false;
            })
            .addCase(logout.rejected, (state, action) => {
                state.logoutLoading = false;
                state.logoutError = action.payload;
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
            })
            .addCase(getUser.pending, (state) => {
                state.userLoading = true;
                state.userError = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.userLoading = false;
                state.user = {...action.payload};
                state.isAdmin = state.user?.role === 'ADMIN';
            })
            .addCase(getUser.rejected, (state, action) => {
                state.userLoading = false;
                state.isAdmin = false;
                state.userError = action.payload;
            });
    }
});

export default authSlice.reducer;
export const { resetError, resetLoading } = authSlice.actions;

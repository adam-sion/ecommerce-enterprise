import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FaSliders } from "react-icons/fa6";

const authApi = axios.create({baseURL:`${import.meta.env.VITE_JTV_SERVER_URL}/auth`});

export const login = createAsyncThunk("auth/login", async (userData, {rejectWithValue})=> {
    try {
        return await authApi.post("/login", userData, {withCredentials:true});
    } catch (error) {
     return rejectWithValue(error.response ? error.response.data.message : "Login has failed");
    }
})

export const signup = createAsyncThunk("auth/signup", async (userData, {rejectWithValue})=> {
    try {
        return await authApi.post("/signup", userData, {withCredentials:true});
    } catch (error) {
     return rejectWithValue(error.response ? error.response.data.message : "Signup has failed");
    }
})

export const verifyRegister = createAsyncThunk("auth/verify", async (token, {rejectWithValue})=> {
    try {
        return await authApi.get("/verify", {withCredentials:true, params:{token:token}});
    } catch (error) {
     return rejectWithValue(error.response ? error.response.data.message : "Signup has failed");
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {loginLoading:false, signupLoading:false, verifyRegisterLoading:false , loginError: null, signupError:null , verifyRegisterError:null},
    reducers: {
        resetError: (state) => {
            state.loginError = null;
            state.signupError = null;
          },
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
            }).addCase(signup.pending, (state) => {
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
    },
});

export default authSlice.reducer;
export const { resetError } = authSlice.actions;
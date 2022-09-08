import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appAlert from "../../helpers/appAlert";
import { AuthState } from "../../interfaces/auth/AuthState";
import { CreateAccountRequest } from "../../interfaces/auth/CreateAccountRequest";
import { LoginRequest } from "../../interfaces/auth/LoginRequest";
import authService from "../../services/auth/authService";

const initialState: AuthState = {
    user: null,
    token: '',
    isLoading: false,
    error: null
};

export const createAccount = createAsyncThunk('auth/createAccount', async ({ email, password }: CreateAccountRequest, thunkAPI) => {
    try {
        const response = await authService.createAccount({ email, password });

        if (response.success) {
            appAlert.success(response.message);
            return { user: response.data.user, token: response.data.token };
        } else {
            appAlert.error(response.message);
            return thunkAPI.rejectWithValue(response.statusCode);
        }
    } catch (error: any) {
        const message = error.message || error.toString();
        appAlert.error(error.response.data.message);
        return thunkAPI.rejectWithValue(message);
    }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }: LoginRequest, thunkAPI) => {
    try {
        const response = await authService.login({ email, password });
        if (response.success) {
            appAlert.success(response.message);
            return { user: response.data.user, token: response.data.token };
        } else {
            appAlert.error(response.message);
            return thunkAPI.rejectWithValue(response.statusCode);
        }
    } catch (error: any) {
        const message = error.message || error.toString();
        appAlert.error(error.response.data.message);
        return thunkAPI.rejectWithValue(message);
    }
});

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
    try {
        const response = await authService.getUser();

        if (response.success) {
            appAlert.success(response.message);
            return { user: response.data.user };
        } else {
            appAlert.error(response.message);
            return thunkAPI.rejectWithValue(response.statusCode);
        }
    } catch (error: any) {
        const message = error.message || error.toString();
        appAlert.error(error.response.data.message);
        return thunkAPI.rejectWithValue(message);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAccount.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoading = false;
        });
        builder.addCase(createAccount.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(createAccount.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoading = false;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(getUser.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.isLoading = false;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(getUser.pending, (state, action) => {
            state.isLoading = true;
        });
    }
});

export default authSlice.reducer;
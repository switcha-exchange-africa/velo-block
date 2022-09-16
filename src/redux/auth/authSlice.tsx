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
    error: null,
    isEmailVerified: false

};

const storeUserAndToken = (token: any, user: any) => {
    typeof window != 'undefined' && localStorage.setItem('token', token)
    typeof window != 'undefined' && localStorage.setItem('user', user)
    typeof window != 'undefined' && localStorage.setItem('email', user.email)
}

export const createAccount = createAsyncThunk('auth/createAccount', async ({ email, password, firstName, lastName, device, agreedToTerms, username }: CreateAccountRequest, thunkAPI) => {
    try {
        const response = await authService.createAccount({ email, password, firstName, lastName, device, agreedToTerms, username });
        if (response.status == 201) {
            appAlert.success(response.message);
            storeUserAndToken(response.token, response.data)
            return { user: response.data, token: response.token };
        } else {
            appAlert.error(response.message);
            return thunkAPI.rejectWithValue(response.status);
        }
    } catch (error: any) {
        const message = error.response.data.message || error.message || error.toString() || 'something went wrong';
        appAlert.error(message);
        return thunkAPI.rejectWithValue(message);
    }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }: LoginRequest, thunkAPI) => {
    try {
        const response = await authService.login({ email, password });
        if (response.status == 200) {
            appAlert.success(response.message);
            storeUserAndToken(response.token, response.data)
            return { user: response.data, token: response.data.token };
        } else if (response.status == 202) {
            appAlert.warning(response.message)
            return { isEmailVerified: false }
        }
        else {
            appAlert.error(response.message);
            return thunkAPI.rejectWithValue(response.status);
        }
    } catch (error: any) {
        const message = error.response.data.message || error.message || error.toString() || 'something went wrong';
        appAlert.error(error.response.data.message);
        return thunkAPI.rejectWithValue(message);
    }
});

export const verifyOtp = createAsyncThunk('auth/verifyOtp', async (pin: any, thunkAPI) => {
    try {
        const response = await authService.verifyOtp(pin);
        if (response.status == 200) {
            appAlert.success(response.message);
            storeUserAndToken(response.token, response.data)
            return { user: response.data, token: response.token };
        } else {
            appAlert.error(response.message);
            return thunkAPI.rejectWithValue(response.status);
        }
    } catch (error: any) {
        const message = error.response.data.message || error.message || error.toString() || 'something went wrong';
        appAlert.error(message);
        return thunkAPI.rejectWithValue(message);
    }
});

export const sendOtp = createAsyncThunk('auth/sendOtp', async (_, thunkAPI) => {
    try {
        const response = await authService.sendOtp();

        if (response.status == 200) {
            appAlert.success(response.message);
            return '';
        } else {
            appAlert.error(response.message);
            return thunkAPI.rejectWithValue(response.status);
        }
    } catch (error: any) {
        const message = error.response.data.message || error.message || error.toString() || 'something went wrong';
        appAlert.error(message);
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
        const message = error.response.data.message || error.message || error.toString() || 'something went wrong';
        appAlert.error(message);
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
            state.isEmailVerified = payload.isEmailVerified;
            state.isLoading = false;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(verifyOtp.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoading = false;
        });
        builder.addCase(verifyOtp.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(verifyOtp.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(sendOtp.fulfilled, (state, { payload }) => {
            state.isLoading = false;
        });
        builder.addCase(sendOtp.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(sendOtp.pending, (state, action) => {
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
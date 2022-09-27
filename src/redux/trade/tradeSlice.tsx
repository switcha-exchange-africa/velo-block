import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appAlert from "../../helpers/appAlert";
import { BuyCryptoRequest } from "../../interfaces/trade/BuyCryptoRequest";
import { SellCryptoRequest } from "../../interfaces/trade/SellCryptoRequest";
import { TradeState } from "../../interfaces/trade/TradeState";
import tradeService from "../../services/trade/tradeService";

const initialState: TradeState = {
    isLoading: false,
    error: null,
};

export const buyCrypto = createAsyncThunk('auth/buyCrypto', async ({ amount, creditCoin, debitCoin }: BuyCryptoRequest, thunkAPI) => {
    try {
        const response = await tradeService.buyCrypto({ amount, creditCoin, debitCoin });
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

export const sellCrypto = createAsyncThunk('auth/sellCrypto', async ({ amount, creditCoin, debitCoin }: SellCryptoRequest, thunkAPI) => {
    try {
        const response = await tradeService.sellCrypto({ amount, creditCoin, debitCoin });
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


export const tradeSlice = createSlice({
    name: 'trade',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buyCrypto.fulfilled, (state, { payload }) => {

            state.isLoading = false;
        });
        builder.addCase(buyCrypto.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(buyCrypto.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(sellCrypto.fulfilled, (state, { payload }) => {

            state.isLoading = false;
        });
        builder.addCase(sellCrypto.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(sellCrypto.pending, (state, action) => {
            state.isLoading = true;
        });
    }
});

export default tradeSlice.reducer;
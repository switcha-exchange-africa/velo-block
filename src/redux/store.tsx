import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'
import tradeReducer from './trade/tradeSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        trade: tradeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'


import authReducer from './features/auth/authSlice'
import quickTradeReducer from './features/quick-trade/quickTradeSlice'

import { authApi } from './services/auth.service'
import { baseApi } from './services/base.service';
import { buySellAPi } from './services/buy-sell.service';
import { exchangeRateApi } from './services/exchange.service';
import { feesApi } from './services/fees.service';
import { quickTradeApi } from './services/quick-trade.service';
import { swapApi } from './services/swap.service';
import { walletApi } from './services/wallet.service';
import { bankApi } from './services/bank.service';
import { baseV2Api } from './services/base.v2.service';

const persistConfig = {
    key: 'root',
    storage
}

const persistQuickTradeReducer = persistReducer(persistConfig, quickTradeReducer)
const persistAuthReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
        quickTrade: persistQuickTradeReducer,
        [authApi.reducerPath]: authApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        [baseV2Api.reducerPath]: baseV2Api.reducer,
        [walletApi.reducerPath]: walletApi.reducer,
        [buySellAPi.reducerPath]: buySellAPi.reducer,
        [swapApi.reducerPath]: swapApi.reducer,
        [quickTradeApi.reducerPath]: quickTradeApi.reducer,
        [feesApi.reducerPath]: feesApi.reducer,
        [exchangeRateApi.reducerPath]: exchangeRateApi.reducer,
        [bankApi.reducerPath]: bankApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat([baseApi.middleware, baseV2Api.middleware, authApi.middleware, walletApi.middleware, buySellAPi.middleware, swapApi.middleware, quickTradeApi.middleware, feesApi.middleware, exchangeRateApi.middleware, bankApi.middleware]),
    devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
// import authReducer from './auth/authSlice'
// import tradeReducer from './trade/tradeSlice'


// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         trade: tradeReducer
//     }
// });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store)
export default store
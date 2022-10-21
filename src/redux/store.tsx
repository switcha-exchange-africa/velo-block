import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './features/auth/authSlice'
import { authApi } from './services/auth.service'
import { baseApi } from './services/base.service';
import { buySellAPi } from './services/buy-sell.service';
import { swapApi } from './services/swap.service';
import { walletApi } from './services/wallet.service';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        [walletApi.reducerPath]: walletApi.reducer,
        [buySellAPi.reducerPath]: buySellAPi.reducer,
        [swapApi.reducerPath]: swapApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: {
            //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
        }).concat([baseApi.middleware, authApi.middleware, walletApi.middleware, buySellAPi.middleware, swapApi.middleware]),
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

export default store
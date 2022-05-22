import * as types from "./types";

const initialState = {
    fetchWallets: "idle",
    fetchTransactions: "idle",
    user : {
        token: "",
        data: "",
        wallets: [],
        transactions: [],
    },
}

export const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_SUCCEEDED:
            return{
                ...state,
                user: {
                    ...state.user,
                    token: action.payload.token,
                    data: action.payload.data,
                }
            };
        case types.GET_USER_WALLET_SUCCEEDED:
            return {
                ...state,
                fetchWallets: "success",
                user: {
                    ...state.user,
                    wallets: action.payload.data
                }
            }
        case types.FETCH_USERS_TRANSACTIONS_SUCCEEDED:
            return {
                ...state,
                fetchTransactions: "success",
                user: {
                    ...state.user,
                    transactions: action.payload.data
                }
            }
        default:
            return state;
    }
}
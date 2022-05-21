import * as types from "./types";

const initialState = {
    user : {
        token: "",
        data: "",
        wallets: []
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
                user: {
                    ...state.user,
                    wallets: action.payload.data
                }
            }
        default:
            return state;
    }
}
import * as types from "./types";

const initialState = {
    showSuccessModal : false,
    fromAmount:"",
    toAmount: "",
    showDepositModal: false,
    showWithdrawModal: false,
    depositItem: {

    }
}

export const swapReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_SWAP_SUCCESS_MODAL:
            return{
                ...state,
                showSuccessModal: action?.payload?.showModal,
                fromAmount: action?.payload?.fromAmount,
                toAmount: action?.payload?.toAmount,
            };
        case types.SHOW_DEPOSIT_MODAL:
            return {
                ...state,
                showDepositModal: action.payload
            }
        case types.SET_DEPOSIT_ITEM:
            return {
                ...state,
                depositItem: action.payload
            }
        case types.SHOW_WITHDRAW_MODAL:
            return {
                ...state,
                showWithdrawModal: action.payload
            }
        default:
            return state;
    }
}
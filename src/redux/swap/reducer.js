import * as types from "./types";

const initialState = {
    showSuccessModal : false,
    fromAmount:"",
    toAmount: "",
    
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
        default:
            return state;
    }
}
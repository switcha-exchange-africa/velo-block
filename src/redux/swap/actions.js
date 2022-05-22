import * as types from "./types";
import { postCall } from "../../networking";
import { urls } from "../../networking/urls";

export const showSwapSuccessModal = (data) => async (dispatch) => {
    dispatch({
        type: types.SHOW_SWAP_SUCCESS_MODAL,
        payload: data
    })
}

export const showDepositModal = (data) => async (dispatch) => {
    dispatch({
        type: types.SHOW_DEPOSIT_MODAL,
        payload: data
    })
}

export const setDepositCoin = (data) => async (dispatch) => {
    dispatch({
        type: types.SET_DEPOSIT_ITEM,
        payload: data
    })
}

export const swapCoinCall = (data) => async (dispatch) => {
    dispatch({
        type: types.SWAP_COIN_STARTED
    })
    try {
        let headers = { "Content-Type": "application/json" };
        const response = await postCall(urls.swapCoin, data, "", headers);
        if (response.status === 200) {
            dispatch({
                type: types.SWAP_COIN_SUCCEEDED,
                payload: data,
            });
            return {
                status: true,
                response: response.data
            };
        } else {
            dispatch({
                type: types.SWAP_COIN_FAILED,
            })
            return {
                status: false,
                response: response.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.SWAP_COIN_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}
// /api/trade/swap
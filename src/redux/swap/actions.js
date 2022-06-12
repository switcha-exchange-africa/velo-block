import * as types from "./types";
import { postCall, getCall } from "../../networking";
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

export const showWithdrawModal = (data) =>  async (dispatch) => {
    dispatch({
        type: types.SHOW_WITHDRAW_MODAL,
        payload: data
    })
}

export const swapCoinCall = (data, token) => async (dispatch) => {
    dispatch({
        type: types.SWAP_COIN_STARTED
    })
    try {
        let headers = { "Content-Type": "application/json", Authorization: token };
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
export const fetchExchange = (token, fromCoin, toCoin) => async (dispatch) => {
    dispatch({
        type: types.FETCH_EXCHANGE_STARTED
    })
    try {
        let headers = { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        let url = `${urls.fetchExchange}?coin=${toCoin}&base=${fromCoin}`
        const response = await getCall(url, "", headers);
        if (response.status === 200) {
            dispatch({
                type: types.FETCH_EXCHANGE_SUCCEEDED,
                payload: response.data.rate,
            });
            return {
                status: true,
                response: response.data.rate.value
            };
        } else {
            dispatch({
                type: types.FETCH_EXCHANGE_FAILED,
            })
            return {
                status: false,
                response: response.data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.FETCH_EXCHANGE_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const buyCoin = (token, payload) => async (dispatch) => {
    dispatch({
        type: types.BUY_COIN_STARTED
    })
    try {
        let headers = { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await postCall(urls.buyCoin, payload, "", headers);
        if (response.status === 200) {
            dispatch({
                type: types.BUY_COIN_SUCCEEDED,
            });
            return {
                status: true,
                response: response.data.message
            };
        } else {
            dispatch({
                type: types.BUY_COIN_FAILED,
            })
            return {
                status: false,
                response: response.data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.BUY_COIN_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const sellCoin = (token, payload) => async (dispatch) => {
    dispatch({
        type: types.SELL_COIN_STARTED
    })
    try {
        let headers = { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await postCall(urls.sellCoin, payload, "", headers);
        if (response.status === 200) {
            dispatch({
                type: types.SELL_COIN_SUCCEEDED,
            });
            return {
                status: true,
                response: response.data.message
            };
        } else {
            dispatch({
                type: types.SELL_COIN_FAILED,
            })
            return {
                status: false,
                response: response.data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.SELL_COIN_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}
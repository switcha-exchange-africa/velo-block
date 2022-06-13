import { postCall, getCall } from "../../networking";
import { urls } from "../../networking/urls";
import * as types from "./types"

export const signupUser = (data) => async (dispatch) => {
    dispatch({
        type: types.SIGNUP_STARTED
    })
    try {
        let headers = { "Content-Type": "application/json" };
        const response = await postCall(urls.signupUser, data, "", headers);
        if (response.status === 201) {
            dispatch({
                type: types.SIGNUP_SUCCEEDED,
                payload: data,
            });
            return {
                status: true,
                response: response.data,
                token: response.data.token
            };
        } else {
            dispatch({
                type: types.SIGNUP_FAILED,
            })
            return {
                status: false,
                response: response.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.SIGNUP_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const loginUser = (data) => async (dispatch) => {
    dispatch({
        type: types.LOGIN_STARTED
    })
    try {
        let headers = { "Content-Type": "application/json" };
        const response = await postCall(urls.loginUser, data, "", headers);
        console.log(response, "ooo")
        const token = response.data.token.replace("Bearer ", "")
 
        if (response.status === 200) {
            dispatch({
                type: types.LOGIN_SUCCEEDED,
                payload: {
                    data: response.data.data,
                    token: token
                },
            });
            return {
                status: true,
                response: response.data,
                token: token
            };
        } else {
            dispatch({
                type: types.LOGIN_FAILED,
            })
            return {
                status: false,
                response: response.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.LOGIN_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const getUsersWallets = (data) => async (dispatch) => {
    dispatch({
        type: types.GET_USER_WALLET_STARTED
    })
    try {
        let headers = { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${data}`
        };
        const response = await getCall(urls.fetchUsersWallets, "", headers);
        if (response.status === 200) {
            dispatch({
                type: types.GET_USER_WALLET_SUCCEEDED,
                payload: response.data.wallets,
            });
            return {
                status: true,
                response: response.data.wallets.data
            };
        } else {
            dispatch({
                type: types.GET_USER_WALLET_FAILED,
            })
            return {
                status: false,
                response: response.data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.GET_USER_WALLET_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const fetchUsersTransactions = (data) => async (dispatch) => {
    dispatch({
        type: types.FETCH_USERS_TRANSACTIONS_STARTED
    })
    try {
        let headers = { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${data}`
        };
        const response = await getCall(urls.fetchTransactions, "", headers);

        if (response.status === 200) {
            dispatch({
                type: types.FETCH_USERS_TRANSACTIONS_SUCCEEDED,
                payload: response.data.transactions,
            });
            return {
                status: true,
                response: response.data.transactions.data
            };
        } else {
            dispatch({
                type: types.FETCH_USERS_TRANSACTIONS_FAILED,
            })
            return {
                status: false,
                response: response.data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.FETCH_USERS_TRANSACTIONS_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const verifyCode = (data, token) => async (dispatch) => {
    dispatch({
        type: types.SIGNUP_STARTED
    })
    // const appToken = Cookies.get("switchaAppToken")
    try {
        let headers = { 
            "Content-Type": "application/json",
            "Authorization": token
        };
        const response = await postCall(urls.verifyCode, data, "", headers);
        if (response.status === 200) {
            dispatch({
                type: types.SIGNUP_SUCCEEDED,
                payload: data,
            });
            return {
                status: true,
                response: response.data
            };
        } else {
            dispatch({
                type: types.SIGNUP_FAILED,
            })
            return {
                status: false,
                response: response.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.SIGNUP_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}
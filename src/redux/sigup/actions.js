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

export const loginUser = (data) => async (dispatch) => {
    dispatch({
        type: types.LOGIN_STARTED
    })
    try {
        let headers = { "Content-Type": "application/json" };
        const response = await postCall(urls.loginUser, data, "", headers);

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
            "Authentication": `Bearer ${data}`
        };
        const response = {
            "status": 200,
            "message": "Wallets retrieved successfully",
            "wallets": {
                "data": [
                    {
                        "_id": "626307860f8a407a7af5e17e",
                        "updatedAt": "2022-04-22T19:52:38.361Z",
                        "createdAt": "2022-04-22T19:52:38.361Z",
                        "lastWithdrawal": 0,
                        "lastDeposit": 0,
                        "status": "active",
                        "coin": "NGN",
                        "user": {
                            "email": "gootech442@yahoo.com",
                            "fullName": "Goodness Ezeh"
                        },
                        "userId": "626307460f8a407a7af5e164",
                        "balance": 0,
                        "__v": 0
                    },
                    {
                        "_id": "626307720f8a407a7af5e171",
                        "updatedAt": "2022-04-22T19:52:18.698Z",
                        "createdAt": "2022-04-22T19:52:18.698Z",
                        "lastWithdrawal": 0,
                        "lastDeposit": 0,
                        "status": "active",
                        "coin": "USDC",
                        "accountId": "623fa10d6bda0b25fefab276",
                        "user": {
                            "email": "gootech442@yahoo.com",
                            "fullName": "Goodness Ezeh"
                        },
                        "userId": "626307460f8a407a7af5e164",
                        "address": "0x0e8441db5fe11c9b555144dbbc48149a8b864571",
                        "balance": 0,
                        "__v": 0
                    },
                    {
                        "_id": "626307690f8a407a7af5e16d",
                        "updatedAt": "2022-04-22T19:52:09.178Z",
                        "createdAt": "2022-04-22T19:52:09.178Z",
                        "lastWithdrawal": 0,
                        "lastDeposit": 0,
                        "status": "active",
                        "coin": "USDT",
                        "accountId": "623f9f674e0bfde09d6b7d62",
                        "user": {
                            "email": "gootech442@yahoo.com",
                            "fullName": "Goodness Ezeh"
                        },
                        "userId": "626307460f8a407a7af5e164",
                        "address": "0x2e0a6c329288fc696747d3498713dd910183e83a",
                        "balance": 0,
                        "__v": 0
                    },
                    {
                        "_id": "626307680f8a407a7af5e16a",
                        "updatedAt": "2022-04-22T19:52:08.695Z",
                        "createdAt": "2022-04-22T19:52:08.695Z",
                        "lastWithdrawal": 0,
                        "lastDeposit": 0,
                        "status": "active",
                        "coin": "BTC",
                        "accountId": "623fa33191fe7597a90be6ac",
                        "user": {
                            "email": "gootech442@yahoo.com",
                            "fullName": "Goodness Ezeh"
                        },
                        "userId": "626307460f8a407a7af5e164",
                        "address": "tb1qt7rs7ejt4nc3xmjr4v705msu0cfm08yrgw7k60",
                        "balance": 0,
                        "__v": 0
                    }
                ],
                "pagination": {
                    "hasPrevious": false,
                    "prevPage": 0,
                    "hasNext": false,
                    "next": 2,
                    "currentPage": 1,
                    "total": 5,
                    "pageSize": 10,
                    "lastPage": 1
                }
            }
        }
        //await getCall(urls.fetchUsersWallets, "", headers);
        if (response.status === 200) {
            dispatch({
                type: types.GET_USER_WALLET_SUCCEEDED,
                payload: response.wallets,
            });
            return {
                status: true,
                response: response.wallets.data
            };
        } else {
            dispatch({
                type: types.GET_USER_WALLET_FAILED,
            })
            return {
                status: false,
                response: response.message
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
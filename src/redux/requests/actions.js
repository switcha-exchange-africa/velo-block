import * as types from "./types";
import { getCall, postCall } from "../../networking";
import { urls } from "../../networking/urls";

export const getConversionRequest=() => async (dispatch) => {
    dispatch({
        type: types.GET_REQUEST_STARTED,
    })
    try{
        let headers={"Content-Type": "application/json"};
        const response = await getCall(urls.fetchConversionRequest,headers )
        const { status, error, success, data} = response;
        if (status === 200){
            dispatch({
                type: types.GET_REQUEST_SUCCEEDED,
                payload: data
            })
            return{
                status: success,
                message: data
            }
        }else {
            return{
                status: false,
                message: error,
            }

        }
    }catch(err){
        dispatch({
            type: types.GET_REQUEST_FAILED,
        })
        return{
            status: false,
            message: err
        }
    }
}

export const createConversionRequest=(payload) => async (dispatch) => {
    dispatch({
        type: types.CREATE_REQUEST_STARTED,
    })
    try{
        let headers={"Content-Type": "application/json"};
        const response = await postCall(urls.createConversionRequest, payload, headers)
        const {success, message, error, data} = response;
        if (!success){
            dispatch({
                type: types.CREATE_REQUEST_SUCCEEDED,
                payload: data
            })
            return{
                status: true,
                message: message
            }
        } else {
            return{
                status: false,
                message: error,
            }

        }
    }catch(err){
        dispatch({
            type: types.CREATE_REQUEST_FAILED,
        })
        return{
            status: false,
            message: err
        }
    }
}
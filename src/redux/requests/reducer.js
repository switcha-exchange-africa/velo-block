import * as types from "./types";

const initialState = {
    requestList : []
}

export const conversionReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CREATE_REQUEST_SUCCEEDED:
            return{
                ...state,
                requestList:[
                    ...state.requestList,
                    action.payload
                ]
            };
        case types.GET_REQUEST_SUCCEEDED:
            return{
                ...state,
                requestList: action.payload,   
            }
        default:
            return state;
    }
}
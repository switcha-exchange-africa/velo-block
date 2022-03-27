import * as types from "./types";

export const showSwapSuccessModal = (data) => async (dispatch) => {
    dispatch({
        type: types.SHOW_SWAP_SUCCESS_MODAL,
        payload: data
    })
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  oldPassword: string
  code: string
}
const initialState:AccountState = {
  oldPassword: "",
  code: ""
}


export const accountSlice = createSlice({
    name: "accountSettings",
    initialState,
    reducers: {
        setOldPassword: (state, { payload: { oldPassword } }: PayloadAction<{ oldPassword: any }>) => {
            state.oldPassword = oldPassword;
        },
        
        setCode: (state, { payload: { code } }: PayloadAction<{ code: any }>) => {
            state.code = code;
        }
    },
});


export const {
    setOldPassword,
    setCode
} = accountSlice.actions


export default accountSlice.reducer
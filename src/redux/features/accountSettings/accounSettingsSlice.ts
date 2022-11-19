import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  oldPassword: string
  code: string,
  secretKey: string,
  url: string
}
const initialState: AccountState = {
    
    oldPassword: "",
    code: "",
    secretKey: "",
    url: ""
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
        },

        setAuthSecurity: (state, { payload: { secretKey, url } }: PayloadAction<{ secretKey: any, url: any }>) => {
            state.secretKey = secretKey;
            state.url = url
        }

    },
});


export const {
    setOldPassword,
    setCode,
    setAuthSecurity
} = accountSlice.actions


export default accountSlice.reducer
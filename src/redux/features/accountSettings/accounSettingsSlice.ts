import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
    oldPassword: string
    code: string,
    secretKey: string,
    url: string,
    authenticator: string
}
const initialState: AccountState = {
    
    oldPassword: "",
    code: "",
    secretKey: "",
    url: "",
    authenticator: ""
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
        },

        setAuthenticator: (state, { payload: { authenticator } }: PayloadAction<{ authenticator: any }>) => {
            state.authenticator = authenticator
        }

    },
});


export const {
    setOldPassword,
    setCode,
    setAuthSecurity,
    setAuthenticator
} = accountSlice.actions


export default accountSlice.reducer
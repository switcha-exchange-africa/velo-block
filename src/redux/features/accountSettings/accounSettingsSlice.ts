import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
    walletBalance: [],
    oldPassword: string
    code: string,
    secretKey: string,
    url: string,
    authenticator: string
}
const initialState: AccountState = {
    walletBalance: [],
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
        setWalletBalance: (state, { payload: { walletBalance } }: PayloadAction<{ walletBalance: any }>) => {
            state.walletBalance = walletBalance;
        },
        
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
    setWalletBalance,
    setOldPassword,
    setCode,
    setAuthSecurity,
    setAuthenticator
} = accountSlice.actions


export default accountSlice.reducer
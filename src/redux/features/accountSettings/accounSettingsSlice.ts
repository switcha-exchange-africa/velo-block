import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
    walletBalance: [],
    oldPassword: string,
    singleAds: any,
    code: string,
    secretKey: string,
    url: string,
    authenticator: string,
    phoneNumber: string,
    accountInfo: any
}

const initialState: AccountState = {
    walletBalance: [],
    singleAds: {},
    oldPassword: "",
    code: "",
    secretKey: "",
    url: "",
    authenticator: "",
    phoneNumber: "",
    accountInfo: ""
}


export const accountSlice = createSlice({
    name: "accountSettings",
    initialState,
    reducers: {
        setWalletBalance: (state, { payload: { walletBalance } }: PayloadAction<{ walletBalance: any }>) => {
            state.walletBalance = walletBalance;
        },

        setSingleAds: (state, { payload: { singleAds } }: PayloadAction<{ singleAds: any }>) => {
            state.singleAds = singleAds;
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
        },

        setPhoneNumber: (state, { payload: { phoneNumber } }: PayloadAction<{ phoneNumber: any }>) => {
            state.phoneNumber = phoneNumber
        },

        setAccountInfo: (state, { payload: { accountInfo } }: PayloadAction<{ accountInfo: any }>) => {
            state.accountInfo = accountInfo
        },

    },
});


export const {
    setWalletBalance,
    setSingleAds,
    setOldPassword,
    setCode,
    setAuthSecurity,
    setAuthenticator,
    setPhoneNumber,
    setAccountInfo
} = accountSlice.actions


export default accountSlice.reducer
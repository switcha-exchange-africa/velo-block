import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../interfaces/auth/AuthState";
import Cookie from "js-cookie";

const initialState: AuthState = {
  user: null,
  token: null,
  fptoken: null,
  fpemail: null,
  error: null,
  isEmailVerified: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: any; token: string }>
    ) => {
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      Cookie.set("SwitchaJWT", token);
    },
    setEmailVerified: (
      state,
      { payload: { emailVerified } }: PayloadAction<{ emailVerified: any }>
    ) => {
      state.isEmailVerified = emailVerified;
    },
    setEmailAndPassword: (
      _,
      {
        payload: { email, password },
      }: PayloadAction<{ email: any; password: any }>
    ) => {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    },
    setFirstNameAndLastName: (
      _,
      {
        payload: { firstname, lastname },
      }: PayloadAction<{ firstname: any; lastname: any }>
    ) => {
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
    },
    clearFromLocalStorage: (_) => {
      localStorage.removeItem("firstname");
      localStorage.removeItem("lastname");
      localStorage.removeItem("password");
    },
    getTokenFromLocalStorage: (state) => {
      state.token = localStorage.getItem("token");
    },
    removeTokenFromLocalStorage: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      Cookie.remove("SwitchaJWT");
    },
    setForgotPasswordCredentials: (
      state,
      {
        payload: { email, fptoken },
      }: PayloadAction<{ email: any; fptoken: string }>
    ) => {
      state.fpemail = email;
      state.fptoken = fptoken;
    },

    clearForgotPasswordCredentials: (state) => {
      state.fpemail = null;
      state.fptoken = null;
    },
  },
});

export const {
  setCredentials,
  setEmailVerified,
  setEmailAndPassword,
  setFirstNameAndLastName,
  clearFromLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  setForgotPasswordCredentials,
  clearForgotPasswordCredentials,
} = authSlice.actions;

export default authSlice.reducer;

import endpoints from "../../constants/endpoints";
import { CreateAccountRequest } from "../../interfaces/auth/CreateAccountRequest";
import { LoginRequest } from "../../interfaces/auth/LoginRequest";
import { baseApi } from "./base.service";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAccount: builder.mutation<any, CreateAccountRequest>({
      query: (body: CreateAccountRequest) => {
        return {
          url: `${endpoints.REGISTER_URL}`,
          method: "POST",
          body: { ...body },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    login: builder.mutation<any, LoginRequest>({
      query: (body: LoginRequest) => {
        return {
          url: `${endpoints.LOGIN_URL}`,
          method: "POST",
          body: { ...body },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    sendOtp: builder.query<any, any>({
      query: () => `${endpoints.RESEND_VERIFY_EMAIL_URL}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    verifyOtp: builder.mutation<any, string>({
      query: (pin: string) => {
        return {
          url: `${endpoints.VERIFY_EMAIL_URL}`,
          method: "POST",
          body: { code: pin },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    getUser: builder.query<any, void>({
      query: () => `${endpoints.GET_USER_URL}`,
      // transformResponse: (responseData: any) => {
      //   return responseData;
      // },
    }),
    forgotPassword: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `auth/recover-password`,
          method: "POST",
          body: { ...body },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    resetPassword: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `auth/reset-password?email=${body.email}&token=${body.token}`,
          method: "POST",
          body: { password: body.password },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
  }),
});

export const {
  useCreateAccountMutation,
  useLoginMutation,
  useVerifyOtpMutation,
  useSendOtpQuery,
  useGetUserQuery,
  useLazyGetUserQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;

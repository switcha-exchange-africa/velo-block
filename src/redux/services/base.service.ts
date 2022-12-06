// import type {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import endpoints from "../../constants/endpoints";
// import {store} from '../store'

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Wallet", "User", "Exchange", "Order", "Transactions"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${endpoints.BASE_URL}/api/v1/`,
    prepareHeaders: (headers) => {
      // const token = getState().user.token
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", token);
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});


// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions)
//   if ( result.error.status === 401) {
//     console.log("what is this for crying out loud")
//   }
//   return result
// }
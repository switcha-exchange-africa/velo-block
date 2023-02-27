import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import endpoints from "../../constants/endpoints";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'


const baseQuery = fetchBaseQuery({
    baseUrl: `${endpoints.BASE_URL}/api/v1/`,
     prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", token);
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
});


const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        const refreshResult = "/signin"
        const getTokenFromLS = localStorage.getItem("token");

        if (refreshResult || !getTokenFromLS) {
            window.location.href = refreshResult
        } 
    }
    return result;
};
export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Wallet", "User", "Exchange", "Order", "Transactions", "Activities"],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
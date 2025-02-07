import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import endpoints from "../../constants/endpoints";


export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Wallet", "User", "Exchange", "Order", "Transactions", "Activities"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${endpoints.BASE_URL}/api/v1/`,
    prepareHeaders: (headers) => {
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
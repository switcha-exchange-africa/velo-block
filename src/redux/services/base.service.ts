import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import endpoints from "../../constants/endpoints";
// import {store} from '../store'

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Wallet", "User"],
  baseQuery: fetchBaseQuery({
    baseUrl: endpoints.BASE_URL,
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import endpoints from "../../constants/endpoints";

export const baseV2Api = createApi({
  reducerPath: "baseV2Api",
  tagTypes: ["Wallet", "User", "Exchange", "Order"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${endpoints.BASE_URL}/api/v2/`,
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

import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const bankApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNigerianBank: builder.query<any, void>({
      query: () => `${endpoints.GET_NIGERIAN_BANKS}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    getBankById: builder.query<any, any>({
      query: (bankId) => `p2p/bank/${bankId}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

  }),
});

export const { useGetNigerianBankQuery, useGetBankByIdQuery, useLazyGetBankByIdQuery } = bankApi;

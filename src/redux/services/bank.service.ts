import { baseApi } from "./base.service";

export const bankApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBankById: builder.query<any, any>({
      query: (bankId) => `p2p/bank/${bankId}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
  }),
});

export const { useGetBankByIdQuery, useLazyGetBankByIdQuery } = bankApi;

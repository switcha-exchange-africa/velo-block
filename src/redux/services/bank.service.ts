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

    addP2pBuyAdsBank: builder.mutation<any, any>({
      query: (bankName) => {
        return {
          url: `p2p/bank`,
          method: "POST",
          body: {
            name: `${bankName}`,
            isActive: true,
            type: "buy",
            isWillingToPayTo: true
          }
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    addP2pSellAdsBank: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `p2p/bank`,
          method: "POST",
          body: {
            ...body,
            isActive: true,
            type: "sell",
            isWillingToPayTo: true
          }
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    getAddedBank: builder.query<any, void>({
      query: () => `p2p/bank`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    deleteAddedBank: builder.mutation<any, any>({
      query: ({id, ...rest}) => {
        return {
          url: `/p2p/bank/${id}`,
          method: "DELETE",
          body: rest
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    getAddedBankSellType: builder.query<any, void>({
      query: () => `p2p/bank/?type=sell`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    getAddedBankPagination: builder.query<any, any>({
      query: ({arg}) => `/p2p/bank/?perpage=5&page=${arg}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    // settings page bank addition
    addBank: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `${endpoints.ADD_BANK}`,
          method: "POST",
          body: {...body}
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    // get users settings bank
    getUsersBank: builder.query<any, void>({
      query: () => `${endpoints.ADD_BANK}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
  }),
});

export const {
  useGetNigerianBankQuery,
  useGetBankByIdQuery,
  useLazyGetBankByIdQuery,
  useAddP2pBuyAdsBankMutation,
  useAddP2pSellAdsBankMutation,
  useAddBankMutation,
  useGetAddedBankQuery,
  useDeleteAddedBankMutation,
  useGetAddedBankSellTypeQuery,
  useGetUsersBankQuery,
  useGetAddedBankPaginationQuery
} = bankApi;

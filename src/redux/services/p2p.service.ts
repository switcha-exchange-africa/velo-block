import { baseApi } from "./base.service";

export const p2pApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrderDetail: builder.query<any, any>({
      query: (orderId) => `p2p/order-id/${orderId}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Order"],
    }),
    notifyMerchant: builder.mutation<any, any>({
      query: (orderId) => {
        return {
          url: `p2p/order/${orderId}/notify-merchant`,
          method: "POST",
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
      invalidatesTags: ["Order"],
    }),
    confirmP2pOrderWithoutCode: builder.mutation<any, any>({
      query: (orderId) => {
        return {
          url: `p2p/order/${orderId}`,
          method: "POST",
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    confirmP2pOrderWithCode: builder.mutation<any, any>({
      query: (params) => {
        return {
          url: `p2p/order/${params.orderId}`,
          method: "POST",
          body: { code: params.code },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
      invalidatesTags: ["Order"],
    }),

    getP2pOrderForClients: builder.query<any, void>({
      query: () => `p2p/order/client`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Order"],
    }),

    getP2pOrderForMerchants: builder.query<any, void>({
      query: () => `p2p/order/merchant`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Order"],
    }),

    getP2pOrderFilterForClient: builder.query<any, any>({
      query: ({type, status}) => `p2p/order/client/?type=${type}&status=${status}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Order"],
    }),

    getP2pOrderFilterForMerchant: builder.query<any, any>({
      query: ({type, status}) => `p2p/order/merchant/?type=${type}&status=${status}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Order"],
    }),
  }),
});

export const {
  useGetOrderDetailQuery,
  useLazyGetOrderDetailQuery,
  useNotifyMerchantMutation,
  useConfirmP2pOrderWithCodeMutation,
  useConfirmP2pOrderWithoutCodeMutation,
  useGetP2pOrderForClientsQuery,
  useGetP2pOrderForMerchantsQuery,
  useGetP2pOrderFilterForClientQuery,
  useGetP2pOrderFilterForMerchantQuery

} = p2pApi;

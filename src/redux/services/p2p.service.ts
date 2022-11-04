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
    }),
  }),
});

export const {
  useGetOrderDetailQuery,
  useNotifyMerchantMutation,
  useConfirmP2pOrderWithCodeMutation,
  useConfirmP2pOrderWithoutCodeMutation,
} = p2pApi;

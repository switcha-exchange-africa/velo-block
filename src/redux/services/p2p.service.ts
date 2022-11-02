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
    notifyMerchant: builder.query<any, any>({
      query: (orderId) => `p2p/order/${orderId}/notify-merchant`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
  }),
});

export const { useGetOrderDetailQuery, useLazyNotifyMerchantQuery } = p2pApi;

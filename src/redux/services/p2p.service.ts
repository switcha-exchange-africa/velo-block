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
  }),
});

export const { useGetOrderDetailQuery, useNotifyMerchantMutation } = p2pApi;

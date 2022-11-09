import { baseApi } from "./base.service";

export const webPushApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //   getOrderDetail: builder.query<any, any>({
    //     query: (orderId) => `p2p/order-id/${orderId}`,
    //     transformResponse: (responseData: any) => {
    //       return responseData;
    //     },
    //     providesTags: ["Order"],
    //   }),
    webPushAfterLogin: builder.mutation<any, any>({
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
    //   confirmP2pOrderWithoutCode: builder.mutation<any, any>({
    //     query: (orderId) => {
    //       return {
    //         url: `p2p/order/${orderId}`,
    //         method: "POST",
    //       };
    //     },
    //     transformResponse: (responseData: any) => {
    //       return responseData;
    //     },
    //   }),
  }),
});

export const {} = webPushApi;

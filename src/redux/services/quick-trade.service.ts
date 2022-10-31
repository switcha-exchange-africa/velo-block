import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const quickTradeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    quickTrade: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `${endpoints.QUICK_TRADE_URL}`,
          method: "POST",
          body: { ...body },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
      invalidatesTags: ["Wallet"],
    }),
  }),
});

export const { useQuickTradeMutation } = quickTradeApi;

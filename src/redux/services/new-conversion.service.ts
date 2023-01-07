// import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const newConversionAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    swapConvert: builder.query<any, any>({
      query: (queryParams) =>
        `rates/exchange?source=${queryParams.source}&destination=${queryParams.destination}&amount=${queryParams.amount}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    swapConvertToGetEstimatedRate: builder.query<any, any>({
      query: (queryParams) =>
        `rates/exchange?source=${queryParams.source}&destination=${queryParams.destination}&amount=${queryParams.amount}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    quickTradeConvert: builder.query<any, any>({
      query: (queryParams) =>
        `rates/single?sub=${queryParams.sub}&base=${queryParams.base}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    quickTradeSellConvert: builder.query<any, any>({
      query: (queryParams) => `trade/quick-trade/rate?amount=${queryParams.amount}&type=sell&coin=${queryParams.sub}&cash=${queryParams.base}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    // {{SWITCHA_URL}}/api/v1/trade/quick-trade/rate?amount=100&type=sell&coin=USDT&cash=NGN
  }),
});

export const {
  //   useGetSingleRateByPairQuery,
  useSwapConvertQuery,

  useSwapConvertToGetEstimatedRateQuery,
  useLazySwapConvertQuery,
  useQuickTradeConvertQuery,

  useQuickTradeSellConvertQuery
} = newConversionAPi;

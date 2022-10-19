import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const buySellAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleRateByPair: builder.query<any, any>({
      query: (queryParams) =>
        `${endpoints.GET_SINGLE_RATE_BY_PAIR_URL}?pair=${queryParams.source}/${queryParams.destination}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    convert: builder.query<any, any>({
      query: (queryParams) =>
        `${endpoints.CONVERT_URL}?amount=${queryParams.amount}&source=${queryParams.source}&destination=${queryParams.destination}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    calculateTradeFees: builder.query<any, any>({
      query: (queryParams) =>
        `${endpoints.CALCULATE_TRADE_FEES_URL}?operation=${queryParams.operation}&amount=${queryParams.amount}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
    buy: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `${endpoints.BUY_CRYPTO_UrL}`,
          method: "POST",
          body: { ...body },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
      invalidatesTags: ["Wallet"],
    }),

    sell: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `${endpoints.SELL_CRYPTO_URL}`,
          method: "POST",
          body: { ...body },
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
      invalidatesTags: ["Wallet"],
    }),

    getAllCoins: builder.query<any, void>({
      query: () => `${endpoints.GET_COINS_URL}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    getCoinsByType: builder.query<any, any>({
      query: (type) => `${endpoints.GET_COINS_URL}?type=${type}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    getSingleCoin: builder.query<any, any>({
      query: (id) => `${endpoints.GET_SINGLE_COIN_URL}${id}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
  }),
});

export const {
  useGetSingleRateByPairQuery,
  useConvertQuery,
  useCalculateTradeFeesQuery,
  useBuyMutation,
  useSellMutation,
  useGetSingleCoinQuery,
  useGetAllCoinsQuery,
  useGetCoinsByTypeQuery,
} = buySellAPi;

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
  }),
});

export const {
  //   useGetSingleRateByPairQuery,
  useSwapConvertQuery,

  useSwapConvertToGetEstimatedRateQuery,
  useLazySwapConvertQuery,
  useQuickTradeConvertQuery,
} = newConversionAPi;

import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const feesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    calculateTradeFees: builder.query<any, any>({
      query: (queryParams) =>
        `${endpoints.CALCULATE_TRADE_FEES_URL}?operation=${queryParams.operation}&amount=${queryParams.amount}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
  }),
});

export const { useCalculateTradeFeesQuery } = feesApi;

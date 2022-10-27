import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const p2pApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoinsByType: builder.query<any, any>({
      query: (orderId) => `${endpoints.GET_SINGLE_ORDER}${orderId}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),
  }),
});

import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const swapApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    swap: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `${endpoints.SWAP_CRYPTO_URL}`,
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

export const { useSwapMutation } = swapApi;

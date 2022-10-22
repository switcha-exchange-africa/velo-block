import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query<any, void>({
      query: () => `${endpoints.GET_WALLET_URL}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Wallet"],
    }),
  }),
});

export const { useGetWalletsQuery } = walletApi;

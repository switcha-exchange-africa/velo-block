import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query<any, void>({
      query: (userId) => `${endpoints.GET_WALLET_URL}?userId=${userId}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Wallet"],
    }),

    getSingleWallet: builder.query<any, any>({
      query: (walletId) => `${endpoints.GET_WALLET_URL}/${walletId}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Wallet"],
    }),


    
    withdrawCrypto: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `withdrawal/crypto`,
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

export const {
  useWithdrawCryptoMutation,
  useGetWalletsQuery,
  useLazyGetSingleWalletQuery,
  useGetSingleWalletQuery,
  useLazyGetWalletsQuery,
} = walletApi;

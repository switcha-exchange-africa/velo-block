import endpoints from "../../constants/endpoints";
import { baseV2Api } from "./base.v2.service";

// export const swapApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     swap: builder.mutation<any, any>({
//       query: (body) => {
//         return {
//           url: `${endpoints.SWAP_CRYPTO_URL}`,
//           method: "POST",
//           body: { ...body },
//         };
//       },
//       transformResponse: (responseData: any) => {
//         return responseData;
//       },
//       invalidatesTags: ["Wallet"],
//     }),
//   }),
// });

export const swapApi = baseV2Api.injectEndpoints({
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

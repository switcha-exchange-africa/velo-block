import { baseApi } from "./base.service";

export const KycApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addLevelTwoKyc: builder.mutation<any, any>({
        query: (image) => {
            return {
                url: `kyc/level-two`,
                method: "POST",
                body: {
                    image: `${image}`,
                }
            };
        },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    addLevelThreeKyc: builder.mutation<any, any>({
        query: (selfie) => {
            return {
                url: `kyc/level-three`,
                method: "POST",
                body: {
                    selfie: `${selfie}`,
                }
            };
        },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

    getVerificationStatus: builder.query<any, any>({
        query: (level) => `kyc/${level}`,
        transformResponse: (responseData: any) => {
            return responseData;
      }
    }),
  }),
});

export const {
  useGetVerificationStatusQuery,
  useAddLevelTwoKycMutation,
  useAddLevelThreeKycMutation
} = KycApi;

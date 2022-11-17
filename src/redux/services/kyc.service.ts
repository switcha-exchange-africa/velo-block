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

    verificationStatus: builder.query<any>({
        query: (level) => `kyc/${level}`,
        transformResponse: (responseData: any) => {
            return responseData;
        },
    }),



  }),
});

export const {
    useAddLevelTwoKycMutation,
    useGetVerificationStatusQuery    
} = KycApi;

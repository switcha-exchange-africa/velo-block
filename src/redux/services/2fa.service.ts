import { baseApi } from "./base.service";

export const Account2faApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    valid2fa: builder.mutation<any, any>({
        query: (code) => {
            return {
                url: `account/enable-two-fa`,
                method: "POST",
                body: {
                    code: `${code}`,
                }
            };
        },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

   enable2fa: builder.mutation<any, any>({
      query: () => {
        return {
          url: `account/enable-two-fa`,
          method: "PUT"
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),


   disable2fa: builder.mutation<any, any>({
      query: () => {
        return {
          url: `account/enable-two-fa`,
          method: "PUT"
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),

   generate2fa: builder.mutation<any, any>({
      query: () => {
        return {
          url: `account/enable-two-fa`,
          method: "PUT"
        };
      },
      transformResponse: (responseData: any) => {
        return responseData;
      },
    }),


  }),
});

export const {
    useValid2faMutation,
    useEnable2faMutation,
    useDisable2faMutation,
    useGenerate2faMutation,
} = Account2faApi;

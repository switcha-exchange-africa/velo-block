import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const transactionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActivities: builder.query<any, any>({
      query: (pageNumber) => `${endpoints.GET_ACTIVITIES}/?perpage=10&page=${pageNumber}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Activities"],
    }),

    getAllTransactions: builder.query<any, any>({
      query: ({userId, pageNumber}) => `${endpoints.GET_ALL_TRANSACTIONS}/?userId=${userId}&perpage=10&page=${pageNumber}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Transactions"],
    }),


    getTransactionPin: builder.query<any, any>({
      query: () => `account/transaction-pin`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Transactions"],
    }),

    createTransactionPin: builder.mutation<any, any>({
        query: (body) => {
            return {
                url: `account/transaction-pin`,
                method: "POST",
                body: { ...body },
            };
        },
        transformResponse: (responseData: any) => {
            return responseData;
        },
      }),
    })
});

export const {
    useGetActivitiesQuery,
  useGetAllTransactionsQuery,
  useGetTransactionPinQuery,
  useCreateTransactionPinMutation
} = transactionsApi;

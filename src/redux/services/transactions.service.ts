import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const transactionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActivities: builder.query<any, any>({
      query: (pageNumber) => `${endpoints.GET_ACTIVITIES}/?perpage=5&page=${pageNumber}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Activities"],
    }),

    getAllTransactions: builder.query<any, any>({
      query: ({accountId, pageNumber}) => `${endpoints.GET_ALL_TRANSACTIONS}/accountId=${accountId}/?perpage=5&page=${pageNumber}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Transactions"],
    }),

  }),
});

export const {
    useGetActivitiesQuery,
    useGetAllTransactionsQuery
} = transactionsApi;

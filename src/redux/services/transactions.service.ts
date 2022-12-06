import endpoints from "../../constants/endpoints";
import { baseApi } from "./base.service";

export const transactionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActivities: builder.query<any, void>({
      query: () => `${endpoints.GET_ACTIVITIES}`,
      transformResponse: (responseData: any) => {
        return responseData;
      },
      providesTags: ["Transactions"],
    }),

  }),
});

export const {
  useGetActivitiesQuery,

} = transactionsApi;

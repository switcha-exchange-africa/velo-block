import endpoints from "../../constants/endpoints";
import {baseApi} from "./base.service";

export const exchangeRateApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getExchange: builder.query<any, void>({
            query: () => `${endpoints.GET_EXCHANGE_URL}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        })
    })
})


export const {
    useGetExchangeQuery
} = exchangeRateApi
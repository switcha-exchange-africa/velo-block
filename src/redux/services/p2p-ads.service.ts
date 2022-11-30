import endpoints from "../../constants/endpoints";
import {baseApi} from "./base.service";

export const adsOrdersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBuyAds: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_BUY_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),

        getSellAds: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),

        getP2pAllAds: builder.query<any, any>({
            query: (userId, pageNumber) => `p2p/ads/?userId=${userId}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),


        createBuyAds: builder.mutation<any, any>({
            query: (body) => {
                return {
                    url: `${endpoints.P2P_ADS}`,
                    method: "POST",
                    body: { ...body },
                };
            },
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
    })
})


export const {
    useGetBuyAdsQuery,
    useGetP2pAllAdsQuery,
    useGetSellAdsQuery,
    useCreateBuyAdsMutation
} = adsOrdersApi
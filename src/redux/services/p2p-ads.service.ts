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

        getBuyAdsUSDT: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_BUY_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
        getBuyAdsBTC: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_BUY_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
        getBuyAdsETH: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_BUY_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
        getBuyAdsUSDC: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_BUY_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),


        // sell section
        getSellAdsUSDT: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
        getSellAdsBTC: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
        getSellAdsETH: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
        getSellAdsUSDC: builder.query<any, any>({
            query: ({arg, pageNumber}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
    })
})


export const {
    useGetBuyAdsQuery,
    useGetBuyAdsUSDTQuery,
    useGetBuyAdsBTCQuery,
    useGetBuyAdsETHQuery,
    useGetBuyAdsUSDCQuery,

    useGetSellAdsUSDTQuery,
    useGetSellAdsBTCQuery,
    useGetSellAdsETHQuery,
    useGetSellAdsUSDCQuery

} = adsOrdersApi
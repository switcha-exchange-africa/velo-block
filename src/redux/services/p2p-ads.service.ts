import endpoints from "../../constants/endpoints";
import {baseApi} from "./base.service";

export const adsOrdersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBuyAds: builder.query<any, void>({
            query: () => `${endpoints.P2P_BUY_ADS_URL}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),

        getSellAdsUSDT: builder.query<any, any>({
            query: ({arg}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),

        getSellAdsBTC: builder.query<any, any>({
            query: ({arg}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),


        getSellAdsETH: builder.query<any, any>({
            query: ({arg}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),


        getSellAdsUSDC: builder.query<any, any>({
            query: ({arg}) => `${endpoints.P2P_SELL_ADS_URL}=${arg}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),
    })
})


export const {
    useGetBuyAdsQuery,
    useGetSellAdsUSDTQuery,
    useGetSellAdsBTCQuery,
    useGetSellAdsETHQuery,
    useGetSellAdsUSDCQuery,

} = adsOrdersApi
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

        getFees: builder.query<any, any>({
            query: (name) => `fees/${name}`,
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
            query: ({userId, pageNumber}) => `p2p/ads?userId=${userId}&perpage=5&page=${pageNumber}`,
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),

        getP2pSingleAds: builder.query<any, any>({
            query: (adId) => `p2p/ads/${adId}`,
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

        editAds: builder.mutation<any, any>({
            query: ({body, id}) => {
                return {
                    url: `${endpoints.P2P_ADS}/${id}`,
                    method: "PUT",
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
    useGetP2pSingleAdsQuery,
    useGetBuyAdsQuery,
    useGetP2pAllAdsQuery,
    useGetSellAdsQuery,
    useCreateBuyAdsMutation,
    useEditAdsMutation,
    useGetFeesQuery
} = adsOrdersApi
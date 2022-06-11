import axios from "axios";

axios.defaults.baseURL = `http://staging-api.switcha.africa/api`;

export const getCall=async(url, params, headers) => {
    return axios({
        method: "get",
        url: url,
        params: params,
        headers: headers,
    }).catch(function (error) {
        if(!error.response) {
            //network error
        } else {
            const { data } = error.response;
            return data;
        }
    })
} 

export const postCall=async(url, data, params, headers) => {
    return axios({
        method: "post",
        url: url,
        data: data,
        params: params,
        headers: headers,
    }).catch(function (error) {
        if(!error.response) {
            //network error
        } else {
            const { data } = error.response;
            return data;
        }
    })
} 
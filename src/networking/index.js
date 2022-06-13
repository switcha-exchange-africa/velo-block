import axios from "axios";
import * as types from "../redux/sigup/types";

axios.defaults.baseURL = `https://staging-api.switcha.africa/api`;

export const intercept = (store) => {
  const { dispatch } = store;
  axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
      if (error?.response) {
        switch (error.response.status) {
          case 401:
            return dispatch({ type: types.SHOW_EXPIRED_MODAL });

          default:
            return Promise.reject(error);
        }
      }

      if (error.message === "Network Error") {
        const errorMessage = {
          response: {
            data: {
              message:
                "Network Error. Please check if you are connected to the internet.",
            },
          },
        };
        return Promise.reject(errorMessage);
      }

      return Promise.reject(error);
    }
  );
};

export const getCall = async (url, params, headers) => {
  return axios({
    method: "get",
    url: url,
    params: params,
    headers: headers,
  }).catch(function (error) {
    if (!error.response) {
      //network error
    } else {
      const { data } = error.response;
      return data;
    }
  });
};

export const postCall = async (url, data, params, headers) => {
  return axios({
    method: "post",
    url: url,
    data: data,
    params: params,
    headers: headers,
  }).catch(function (error) {
    if (!error.response) {
      //network error
    } else {
      const { data } = error.response;
      return data;
    }
  });
};

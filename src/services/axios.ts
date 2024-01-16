//Third Party
import axios from 'axios';
import promise from 'promise';

import {BASE_URL} from '../Config';

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

let cancelSource = axios.CancelToken.source();

export const cancelRequest = (message: string) => {
  cancelSource.cancel(message);
  cancelSource = axios.CancelToken.source();
  AxiosInstance.defaults.cancelToken = cancelSource.token;
};

AxiosInstance.interceptors.request.use(
  async config => {
    config.cancelToken = cancelSource.token;
    return config;
  },
  function (error) {
    return promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default AxiosInstance;

//Third Party
import axios from 'axios';
import promise from 'promise';

import {NOSYA_URL} from '../Config';

const NosyaAxios = axios.create({
  baseURL: NOSYA_URL,
});

let cancelSource = axios.CancelToken.source();

export const cancelRequest = (message: string) => {
  cancelSource.cancel(message);
  cancelSource = axios.CancelToken.source();
  NosyaAxios.defaults.cancelToken = cancelSource.token;
};

NosyaAxios.interceptors.request.use(
  async config => {
    config.cancelToken = cancelSource.token;
    return config;
  },
  function (error) {
    return promise.reject(error);
  },
);

NosyaAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default NosyaAxios;

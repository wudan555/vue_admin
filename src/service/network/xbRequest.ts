import { BASE_URL, TIME_OUT } from './config';
import BaseRequest from './baseRequest';

const xbRequest = new BaseRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptoer(config) {
      // console.log('请求成功拦截');
      return config;
    },
    requestInterceptoerCatch(err) {
      console.log('请求失败拦截', err);
    },
    responseInterceptoer(res) {
      // console.log('响应成功拦截');
      return res;
    },
    responseInterceptoerCatch(err) {
      console.log('响应失败拦截', err);
      return err;
    }
  }
});
export default xbRequest;

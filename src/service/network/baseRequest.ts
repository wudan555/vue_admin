import axios, { Method } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading, ILoadingInstance } from 'element-plus';
/* 这里封装这个包装类的意义就在于如果以后axios不再维护了，只需要更换这个包装类即可 */
interface IInterceptors {
  requestInterceptoer?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptoerCatch?: (error: any) => any;
  responseInterceptoer?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptoerCatch?: (error: any) => any;
}
export interface IXBResponse {
  data: any;
  code: number;
  success: boolean;
}
interface IXBRequestConfig extends AxiosRequestConfig {
  interceptors?: IInterceptors;
  method?: Method;
  isShowLoading?: boolean;
}
class BaseRequest {
  instance: AxiosInstance;
  interceptors?: IInterceptors;
  loading?: ILoadingInstance;
  isShowLoading?: boolean;

  constructor(config: IXBRequestConfig) {
    // 某个base_url拦截器
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.isShowLoading = config.isShowLoading ?? true;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptoer,
      this.interceptors?.requestInterceptoerCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptoer,
      this.interceptors?.responseInterceptoerCatch
    );
    // 全局请求拦截
    this.instance.interceptors.request.use((config) => {
      // console.log('全局请求拦截');
      if (this.isShowLoading === true) {
        this.loading = ElLoading.service({
          lock: true,
          text: '正在请求中.....',
          background: 'rgba(0,0,0,0.5)'
        });
      }

      return config;
    });
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应拦截');
        this.loading?.close();
        return res;
      },
      () => {
        this.loading?.close();
      }
    );
  }

  request(config: IXBRequestConfig): Promise<IXBResponse> {
    /* if (config.interceptors?.requestInterceptoer) {
      console.log('单个请求拦截');
      config.interceptors.requestInterceptoer(config);
    } */
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(
            res.data ?? {
              data: res,
              code: 500,
              success: false
            }
          );
        })
        .catch((err) => {
          // console.log('请求响应出错:', err);
          reject(err);
        });
    });

    /* this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptoer) {
        console.log('单个响应拦截');
        res = config.interceptors.responseInterceptoer(res);
      }
      console.log(res);
      return res;
    }); */
  }
  post(config: IXBRequestConfig): Promise<IXBResponse> {
    return new Promise((resolve, reject) => {
      this.request({ ...config, method: 'POST' })
        .then((res) => {
          console.log();
          resolve(
            res ?? {
              data: res,
              code: 500,
              success: false
            }
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get(config: IXBRequestConfig): Promise<IXBResponse> {
    return new Promise((resolve, reject) => {
      this.request({ ...config, method: 'GET' })
        .then((res) => {
          console.log();
          resolve(
            res ?? {
              data: res,
              code: 500,
              success: false
            }
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  delete(config: IXBRequestConfig): Promise<IXBResponse> {
    return new Promise((resolve, reject) => {
      this.request({ ...config, method: 'DELETE' })
        .then((res) => {
          console.log();
          resolve(
            res ?? {
              data: res,
              code: 500,
              success: false
            }
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  /* 修改方法 */
  patch(config: IXBRequestConfig): Promise<IXBResponse> {
    return new Promise((resolve, reject) => {
      this.request({ ...config, method: 'PATCH' })
        .then((res) => {
          console.log();
          resolve(
            res ?? {
              data: res,
              code: 500,
              success: false
            }
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default BaseRequest;

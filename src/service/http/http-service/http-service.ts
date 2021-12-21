import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { headerInterceptor } from '../interceptor/header-interceptor';

export interface IDataWithError<T> {
  code: number;
  data: T;
  msg: string;
}

class HttpService {
  private readonly http!: AxiosInstance;
  private readonly timeout = 5 * 60 * 1000;
  private readonly baseURL = 'https://api.mabangerp.com';

  constructor() {
    this.http = axios.create({
      timeout: this.timeout,
      baseURL: this.baseURL,
      withCredentials: false,
    });

    this.addInterceptors();
  }

  request<T>(
    method: Method,
    url: string,
    param: unknown,
    axiosRequestConfig?: AxiosRequestConfig
  ): Promise<IDataWithError<T>> {
    const config: AxiosRequestConfig = { method, url, ...axiosRequestConfig };

    if (method === 'get') {
      config.params = param;
    } else {
      config.data = param;
    }

    return this.send<T>(config);
  }

  private send<T>(config: AxiosRequestConfig): Promise<IDataWithError<T>> {
    return new Promise((resolve, reject) => {
      this.http
        .request(config)
        .then(
          (response) => {
            const data = response.data as IDataWithError<T>;
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        )
        .catch((reason) => {
          reject(reason);
        });
    });
  }

  // 添加拦截器
  private addInterceptors(): void {
    headerInterceptor(this.http);
  }
}

export const httpService = new HttpService();

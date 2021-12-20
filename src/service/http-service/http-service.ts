import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

export interface IDataWithError<T> {
  code: number;
  data: T;
  msg: string;
}

class HttpService {
  private readonly axiosInstance!: AxiosInstance;
  private readonly timeout = 5 * 60 * 1000;
  private readonly baseURL = 'https://api.mabangerp.com';

  constructor() {
    console.log('------init HttpService --------');

    this.axiosInstance = axios.create({
      timeout: this.timeout,
      baseURL: this.baseURL,
    });

    this.axiosInstance.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';

    this.addInterceptors();
  }

  request<T>(
    method: Method,
    url: string,
    param: unknown,
    axiosRequestConfig?: AxiosRequestConfig
  ): Promise<IDataWithError<T>> {
    const config: AxiosRequestConfig = { method, url, ...axiosRequestConfig };

    switch (method.toLowerCase()) {
      case 'get':
        config.params = param;
        break;
      case 'post':
      case 'put':
      case 'patch':
        config.data = param;
        break;
      default:
        config.data = param;
        break;
    }

    return this.axiosInstance.request(config);
  }

  private addInterceptors(): void {
    // 添加拦截器
  }
}

export const httpService = new HttpService();

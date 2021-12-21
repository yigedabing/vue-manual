import { AxiosInstance, AxiosRequestConfig } from 'axios';

export function headerInterceptor(http: AxiosInstance) {
  http.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = { ...config.headers };
    // add token
    return config;
  });
}

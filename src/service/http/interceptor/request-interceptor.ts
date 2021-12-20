import { AxiosRequestConfig } from 'axios';

export function requestInterceptor(config: AxiosRequestConfig) {
  // todo
  // 添加token
  return config;
}

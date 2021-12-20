import { AxiosResponse } from 'axios';

export function responseInterceptor(response: AxiosResponse) {
  const data = response.data;
  return data;
}

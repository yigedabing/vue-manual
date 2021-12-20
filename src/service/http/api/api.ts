import { httpService, IDataWithError } from '../http-service/http-service';
import { ApiPath } from './api-path';
import { ILoginInfo, ILoginParam } from './api-type';

// 用户登录
export function login(param: ILoginParam): Promise<IDataWithError<ILoginInfo>> {
  return httpService.request('post', ApiPath.login, param);
}

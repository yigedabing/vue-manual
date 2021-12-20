export class ApiPath {
  // 防止外部通过new创建
  private constructor() {
    // do nothing
  }

  public static readonly login = '/sso/api/v1/login';
}

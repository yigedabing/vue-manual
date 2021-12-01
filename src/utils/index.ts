/**
 * 手机号校验
 */
export function isPhone(phone: string): boolean {
  const phoneReg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
  return phoneReg.test(phone);
}

/**
 * 邮箱校验
 */
export function isEmail(email: string): boolean {
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
}

/**
 * 随机生成11位数组成的id
 */
export function generateId(): string {
  return Math.random().toString(36).split('.')[1];
}

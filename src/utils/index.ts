import { IOpenConfirmDialogOption } from '@/types/ui-type';
import { MessageBox } from 'element-ui';

////////////////////////【工具函数】///////////////////////////////
//////////大于20kb时，会打包成一个chunk-hash.js文件//////////////////
/////////////////////////////////////////////////////////////////
//////////小于20kb时，会直接把源码打包到引用该utils工具函数的模块中//////
/////////////////////////////////////////////////////////////////

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

/**
 * 数组对象去重
 */
export function filterByProp(arr: any[], prop: string) {
  const temp = Object.create(null);
  return arr.reduce((cur, next) => {
    if (!temp[next[prop]]) {
      temp[next[prop]] = true;
      cur.push(next);
    }
    return cur;
  }, []);
}

/**
 * 删除提示框
 */
export async function openConfirmDialog(options: IOpenConfirmDialogOption) {
  options = options || {};

  try {
    const res = await MessageBox.confirm(options.message || '--', options.title || '删除？', {
      confirmButtonText: options.ok || '确定',
      cancelButtonText: options.cancel || '取消',
      type: options.type || 'error',
      customClass: 'custom-message-box',
      dangerouslyUseHTMLString: true,
    });
    return res === 'confirm';
  } catch (error) {
    return false;
  }
}

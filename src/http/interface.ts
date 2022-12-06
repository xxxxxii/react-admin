/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 14:30:49
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-04 15:04:00
 * @FilePath: \react-admin\src\http\interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ReqLogin {
    token: string;
    userinfo: Array<object>;
  }
}

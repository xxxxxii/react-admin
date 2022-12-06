/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 14:29:41
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-04 19:17:00
 * @FilePath: \react-admin\src\http\modules\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from "../index";
import { Login } from "../interface";

export const loginApi = (data: any) => {
  return http.post<Login.ReqLogin>("/users/login", data);
};

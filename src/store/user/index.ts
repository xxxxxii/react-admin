/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-05 14:05:22
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-08 01:45:57
 * @FilePath: \react-admin\src\store\module\sysTheme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { loginApi } from "../../http/modules/login";
import { message } from "antd";

export default {
  state: {
    token: "",
    userInfo: {},
  },

  actions: {
    saveUser(newState: { userInfo: any }, action: any) {
      newState.userInfo = action.data;
    },
  },
};

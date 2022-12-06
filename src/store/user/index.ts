/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-05 14:05:22
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-06 13:32:53
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
    async login(
      newState: { userInfo: any },
      action: {
        fromData: any;
        type: string;
      }
    ) {
      console.log(action.fromData);

      const res = await loginApi(action.fromData);
      message.success("登陆成功！");
      newState.userInfo = res;
      sessionStorage.setItem("userInfo", JSON.stringify(res));
    },
  },
};

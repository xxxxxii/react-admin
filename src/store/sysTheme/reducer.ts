/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-05 14:08:14
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-05 15:57:37
 * @FilePath: \react-admin\src\store\sysTheme\reducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import store from "./index";
let reducer = (state = { ...store.state }, action: { type: string }) => {
  let newState = JSON.parse(JSON.stringify(state));

  //   switch (action.type) {
  //     case sysTheme.setTheme:
  //       sysTheme.actions[sysTheme.setTheme](newState);
  //       break;
  //     default:
  //       break;
  //   }
  //   as keyof typeof store.actions
  for (let key in store.actions) {
    if (action.type === key) {
      store.actions[action.type as keyof typeof store.actions](newState);
      break;
    }
  }

  return newState;
};

export default reducer;

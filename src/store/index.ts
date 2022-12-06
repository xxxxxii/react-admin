/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-05 12:11:12
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-06 12:58:12
 * @FilePath: \react-admin\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { legacy_createStore, combineReducers } from "redux";

import sysTheme from "./sysTheme/reducer";
import user from "./user/reducer";
const reducers = combineReducers({
  sysTheme,
  user,
});
const store = legacy_createStore(reducers);

export default store;

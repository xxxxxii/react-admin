/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-03 20:01:40
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-06 14:08:51
 * @FilePath: \react-admin\src\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from "../src/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);

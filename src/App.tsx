/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-03 20:01:40
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-08 01:15:58
 * @FilePath: \react-admin\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import React from "react";
import "./App.css";
import { HashRouter, BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ConfigProvider, theme } from "antd";
import { useSelector } from "react-redux";
import FrontendAuth from "./router/FrontendAuth";

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};
const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: "#1677ff",
};
function App() {
  const { theme: themeMode } = useSelector((state: RootState) => ({
    theme: state.sysTheme.theme,
  }));
  let bodyDom = document.querySelector("body") as HTMLElement;
  if (themeMode === "light") {
    bodyDom.classList.contains("dark")
      ? bodyDom.classList.replace("dark", "light")
      : bodyDom.classList.add("light");
  } else {
    bodyDom.classList.contains("light")
      ? bodyDom.classList.replace("light", "dark")
      : bodyDom.classList.add("dark");
  }
  const [data, setData] = React.useState<ThemeData>(defaultData);
  return (
    <div className="App ">
      <BrowserRouter>
        <FrontendAuth>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: data.colorPrimary,
                borderRadius: data.borderRadius,
              },
              algorithm:
                themeMode === "light"
                  ? theme.defaultAlgorithm
                  : theme.darkAlgorithm,
            }}
          >
            <Router />
          </ConfigProvider>
        </FrontendAuth>
      </BrowserRouter>
    </div>
  );
}

export default App;

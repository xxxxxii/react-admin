/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-03 20:01:40
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-05 19:02:10
 * @FilePath: \react-admin\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Router from "./router";
import { ConfigProvider, theme } from "antd";
import { useSelector } from "react-redux";

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
  const [count, setCount] = useState(0);
  const [data, setData] = React.useState<ThemeData>(defaultData);
  return (
    <div className="App ">
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;

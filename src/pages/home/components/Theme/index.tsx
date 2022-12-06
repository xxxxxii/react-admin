/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-05 00:03:46
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-05 17:21:15
 * @FilePath: \react-admin\src\pages\home\components\theme\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../../store";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function theme() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => ({
    theme: state.sysTheme.theme,
  }));
  const themeMode = () => {
    dispatch({ type: "setTheme" });
  };
  return (
    <div className="flex items-center  ">
      {React.createElement(
        theme === "light" ? BsFillMoonStarsFill : BsFillSunFill,
        {
          className: "trigger icon hover:rotate-90 duration-300 mr-3",
          onClick: () => themeMode(),
        }
      )}
    </div>
  );
}

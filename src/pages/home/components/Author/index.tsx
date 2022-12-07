/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-06 17:19:15
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-08 02:17:02
 * @FilePath: \react-admin-main\src\pages\home\components\Author\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Dropdown, Image, Avatar } from "antd";

export default function author() {
  const navigateTo = useNavigate();
  const loginOut = () => {
    sessionStorage.clear();
    // const router = useNavigate();
    navigateTo("/login");
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          github
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={loginOut}>loginout</div>,
      key: "1",
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <div>
        <a onClick={(e) => e.preventDefault()} className="flex items-center">
          <Avatar size={46} src="https://joeschmoe.io/api/v1/random" />
        </a>
      </div>
    </Dropdown>
  );
}

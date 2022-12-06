/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 20:00:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-06 16:31:11
 * @FilePath: \react-admin\src\pages\home\components\menu\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import logo from "../../../../assets/logo.png";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("用户", "/home/user", <PieChartOutlined />),
  getItem("测试", "/home/test", <DesktopOutlined />),

  getItem("管理", "sub2", <AppstoreOutlined />, [
    getItem("标签列表", "/home/labelList"),
    getItem("分类管理", "/home/group"),

    getItem("文章管理", "sub3", null, [
      getItem("文章添加", "/home/articleAdd"),
      getItem("文章列表", "/home/articleList"),
      getItem("留言列表", "/home/leaveList"),
    ]),
  ]),
];

export default function AntMenu() {
  const currentRoute = useLocation();
  const navigateTo = useNavigate();

  const menuClick = (e: { key: string }) => {
    console.log(e);
    navigateTo(e.key);
  };

  const defOpenkeys = currentRoute.pathname.split("/")[0];

  const [openkeys, setOpenkeys] = useState(["sub2", "sub3"]);
  const handleOpenChange = (keys: string[]) => {
    console.log(keys);
    // setOpenkeys([keys[keys.length - 1]]);
  };

  return (
    <div className=" h-full duration-500">
      <div className="logo w-full flex justify-center">
        <img className=" p-2 w-[60px]" src={logo} alt="" />
      </div>
      <Menu
        className="menu-h"
        defaultSelectedKeys={[currentRoute.pathname]}
        // defaultOpenKeys={openkeys}
        mode="inline"
        theme="light"
        items={items}
        onClick={menuClick}
        onOpenChange={handleOpenChange}
        // openKeys={openkeys}
      />
    </div>
  );
}

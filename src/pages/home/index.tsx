/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 19:11:26
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-06 16:33:11
 * @FilePath: \react-admin\src\pages\home\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import "./index.css";
import { Layout, Button, Divider } from "antd";
import Menu from "./components/Menu";
const { Header, Footer, Sider, Content } = Layout;

import { useSelector, useDispatch } from "react-redux";
import store from "../../store";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Theme from "./components/Theme";
import { Outlet } from "react-router-dom";
import Author from "./components/Author";
export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useDispatch();

  return (
    <Layout className=" h-full">
      <Sider
        className="duration-500"
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme={"light"}
      >
        <Menu />
      </Sider>
      <Layout>
        <Header style={{ background: "none", padding: "0" }}>
          <div className="header-box px-2 shadow-md border-b flex items-center justify-between">
            <div className="hearder-left">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger icon px-2 duration-500",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </div>
            <div className="hearder-right flex items-center">
              <Theme />

              <Author />
            </div>
          </div>
        </Header>
        <Content>
          <div className="p-2">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

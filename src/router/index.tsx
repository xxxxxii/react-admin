/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-03 20:07:13
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-06 16:32:36
 * @FilePath: \react-admin\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Navigate, useRoutes } from "react-router-dom";
import React, { lazy } from "react";
// import Home from "../pages/home";
import Login from "../pages/login/index";
// import User from "../pages/user";

const Home = lazy(() => import("../pages/home"));
// const Login = lazy(() => import("../pages/login/index"));
const User = lazy(() => import("../pages/user/index"));
const Test = lazy(() => import("../pages/test/index"));
const ArticleAdd = lazy(() => import("../pages/article/articleAdd"));
const ArticleList = lazy(() => import("../pages/article/articleList"));
const LeaveList = lazy(() => import("../pages/leave/leaveList"));
const LabelList = lazy(() => import("../pages/label/index"));
const Group = lazy(() => import("../pages/group/index"));
export interface MetaPPropps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  key?: string;
}

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  path?: string;
  meta?: MetaPPropps;
  isLink?: string;
}

const loadingComponents = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);

export const rootRouter: RouteObject[] = [
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "login",
      key: "login",
    },
  },
  {
    path: "/home",
    element: <Navigate to="/home/user" />,
  },
  {
    path: "/home",
    element: loadingComponents(<Home />),
    children: [
      { path: "/home/user", element: loadingComponents(<User />) },
      { path: "/home/test", element: loadingComponents(<Test />) },
      { path: "/home/articleAdd", element: loadingComponents(<ArticleAdd />) },
      {
        path: "/home/articleList",
        element: loadingComponents(<ArticleList />),
      },
      {
        path: "/home/leaveList",
        element: loadingComponents(<LeaveList />),
      },
      {
        path: "/home/labelList",
        element: loadingComponents(<LabelList />),
      },
      {
        path: "/home/group",
        element: loadingComponents(<Group />),
      },
    ],
    meta: {
      requiresAuth: false,
      title: "首页",
      key: "home",
    },
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const router = useRoutes(rootRouter);
  return router;
};

export default Router;

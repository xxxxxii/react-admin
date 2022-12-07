/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-08 01:07:51
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-08 02:09:43
 * @FilePath: \react-admin-main\src\router\FrontendAuth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useLocation, Navigate } from "react-router-dom";

function FrontendAuth(props: { children: JSX.Element }) {
  const { pathname } = useLocation();
  const token = JSON.parse(sessionStorage.getItem("userInfo") as string);
  console.log(pathname, token);
  // if (pathname === "/login") {
  //   return props.children;
  // }
  const reRouter = localStorage.getItem("cRoute") as string;
  console.log(reRouter);
  if (!token) {
    if (pathname === "/login") {
      return props.children;
    } else {
      return <Navigate to="/login" />;
    }
  } else {
    if (pathname === "/login") {
      return <Navigate to={reRouter} />;
    } else {
      localStorage.setItem("cRoute", pathname);
      return props.children;
    }
  }
}

export default FrontendAuth;

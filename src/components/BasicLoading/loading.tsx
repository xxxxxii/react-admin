/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 15:15:02
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-04 16:33:03
 * @FilePath: \react-admin\src\components\BasicLoading\loading.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function loading() {
  return <Spin className=" w-full h-full" indicator={antIcon} />;
}

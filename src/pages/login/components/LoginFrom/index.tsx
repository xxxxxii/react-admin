/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 17:15:00
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-08 01:45:18
 * @FilePath: \react-admin\src\components\LoginFrom\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./index.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginApi } from "../../../../http/modules/login";
import { Login } from "../../../../http/interface";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function LoginFrom() {
  const dispatch = useDispatch();
  const router = useNavigate();
  const dologin = async (fromData: Login.ReqLoginForm) => {
    const res = await loginApi(fromData);
    message.success("登陆成功");
    console.log(res);
    dispatch({ type: "saveUser", data: res });
    sessionStorage.setItem("userInfo", JSON.stringify(res));
    router("/home");
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dologin(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 1 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
    >
      <Form.Item
        label=" "
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        label=" "
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>

      {/* <Form.Item
        label=" "
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input prefix={<LockOutlined />} />
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 1, span: 24 }} className=" text-center">
        <div className=" w-full">
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

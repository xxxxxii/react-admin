import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Image, Avatar } from "antd";
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
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        loginout
      </a>
    ),
    key: "1",
  },
];
export default function author() {
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

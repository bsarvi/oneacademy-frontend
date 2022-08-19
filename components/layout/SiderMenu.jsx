import { Menu } from "antd";
import React, { useState } from "react";
import {
  UsergroupAddOutlined,
  PieChartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Admission service", "3", <UserAddOutlined />, [
    getItem(
      <Link href="/admission-service/admin">
        <a>Admin</a>
      </Link>,
      "3-1",
      []
    ),
    getItem(
      <Link href="/admission-service/student">
        <a>Student</a>
      </Link>,
      "3-2"
    ),
    getItem(
      <Link href="/admission-service/student">
        <a>Student</a>
      </Link>,
      "3-3"
    ),
  ]),
];

const SiderMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={items}
    />
  );
};

export default SiderMenu;

import React, { useState } from "react";
import { Layout, Typography } from "antd";
import SiderMenu from "./SiderMenu";
const { Content, Footer, Sider, Header } = Layout;
const { Text } = Typography;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ padding: 0 }}>
        <div className="logo">
          <Text
            Strong
            style={{ fontSize: "20px", color: "#fff", paddingLeft: "75px" }}
          >
            OneAcademy
          </Text>
        </div>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <SiderMenu />
        </Sider>
        <Layout>
          <Content style={{ margin: "16px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

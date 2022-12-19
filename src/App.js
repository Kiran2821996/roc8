import React, { useState } from "react";
import {CalendarOutlined} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Anticlotting from "./components/diseases/Anticlotting";
import Gastritis from "./components/diseases/Gastritis";
import Nutrient from "./components/diseases/Nutrient";
import Vitamin from "./components/diseases/Vitamin";
import Calender from "./components/calender/Calender";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;


const App = () => {
  const navigate = useNavigate()
  const items = [
 
    {
      key: 'dashboard',
      icon: <CalendarOutlined />,
      label: 'Dashboard',
      onClick: () => {
          navigate('/')
      }
  }
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/" element={<Calender />} />
              <Route path="/anti" element={<Anticlotting />} />
              <Route path="/gast" element={<Gastritis />} />
              <Route path="/nutr" element={<Nutrient />} />
              <Route path="/vita" element={<Vitamin />} />
            </Routes>

            {/* <Anticlotting/> */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  CodeOutlined
} from '@ant-design/icons';
import { IoLogoJavascript } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import "./App.css";

const { Header, Content, Footer, Sider } = Layout;

export default function App() {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };

  const time = new Date()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" >
          <CodeOutlined />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <span role="img" aria-label="Javascript" className="anticon">
              <FaUserAstronaut />
            </span>
            <span>About me</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span role="img" aria-label="Javascript" className="anticon">
              <MdComputer />
            </span>
            <span>Projects</span>
          </Menu.Item>
          <Menu.Item key="9">
            <span role="img" aria-label="Javascript" className="anticon">
              <IoLogoJavascript />
            </span>
            <span>Skills</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 128px' }}>
          <div className="site-layout-background" style={{ margin: '100px 0px 0px 0px', padding: 24, minHeight: '60%', minWidth: 150 }}>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©{time.getFullYear()} Created by Jan Erik</Footer>
      </Layout>
    </Layout>
  );
}
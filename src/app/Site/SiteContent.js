"use client";

import React, { useState } from 'react';
import { Layout, Menu, Image, Collapse } from 'antd';
import {
  UserOutlined,
  LoginOutlined,
  DesktopOutlined,
  BlockOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Panel } = Collapse;

export default function SiteConstant ({ selectedMenuItem, handleMenuClick, children }) {

    const [collapsed, setCollapsed] = useState(false);
    const handleCollapse = () => {
        setCollapsed(!collapsed);
      };
    
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <div
        className="collapse-button"
        style={{
          position: 'fixed',
          top: 20,
          left: collapsed ? 20 : 220,
          cursor: 'pointer',
          zIndex: 999,
          background: 'var(--theme)',
          color: '#fff',
          padding: '10px 20px',
            borderRadius: '0 10px 0 10px',
        }}
        onClick={() => handleCollapse(!collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
        breakpoint="md"
        collapsedWidth={80}
        width={200}
        theme="lite"
        style={{
          overflow: 'auto',
          position: 'fixed',
          zIndex: 1,
          height: '100%',
          left: 0,
          top: 0,
          borderRadius: '0 10px 10px 0',
          paddingTop: 30,
        }}
        
      >
        <div className="demo-logo-vertical" />
        <div
          className="logoholder"
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 40,
          }}
        >
          <Link href="/Dashboard">
            {/* <Image
              src="/images/mave_logo_horizontal.png"
              width={629 / 4}
              height={301 / 4}
              resizeMode="contain"
            /> */}
            {collapsed ? (
              <Image
                src="/images/mave_logo.png"
                width={40} // Adjust the collapsed logo width
                height={40} // Adjust the collapsed logo height
                resizeMode="contain"
              />
            ) : (
              <Image
                src="/images/mave_logo_horizontal.png"
                width={629 / 4}
                height={301 / 4}
                resizeMode="contain"
              />
            )}
          </Link>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedMenuItem]}
          onClick={handleMenuClick}
          collapsible
          collapsedWidth={80}
        >
          {/* MAVE Admin */}
          <SubMenu
            key="mave-admin"
            icon={<UserOutlined />}
            title="MAVE Admin"
            style={{
              marginTop: '20%',
              fontSize: '1.1em',
              fontWeight: 'bold',
            }}
          >
            <Menu.Item key="1" onClick={() => router.push("/Dashboard")}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<LoginOutlined />} onClick={() => router.push("/Login")}>
              Login
            </Menu.Item>
            <Menu.Item key="3" onClick={() => router.push("/Logout")}>
              Log out
            </Menu.Item>
          </SubMenu>

          {/* Components */}
          <SubMenu
            key="components"
            icon={<BlockOutlined />}
            title="Components"
            style={{
              marginTop: '10%',
              fontSize: '1.1em',
              fontWeight: 'bold',
            }}
          >
            <Menu.Item key="4" onClick={() => router.push("/MediaLibrary")}>
              Media Library
            </Menu.Item>
            <Menu.Item key="5" onClick={() => router.push("/Menus")}>
              Menus
            </Menu.Item>
            <Menu.Item key="6" onClick={() => router.push("/Navbars")}>
              Navbars
            </Menu.Item>
            <Menu.Item key="7" onClick={() => router.push("/Sliders")}>
              Sliders
            </Menu.Item>
            <Menu.Item key="8" onClick={() => router.push("/Cards")}>
              Cards
            </Menu.Item>
            <Menu.Item key="9" onClick={() => router.push("/Forms")}>
              Forms
            </Menu.Item>
          </SubMenu>

          {/* Pages */}
          <SubMenu
            key="pages"
            icon={<DesktopOutlined />}
            title="Pages"
            style={{
              marginTop: '10%',
              fontSize: '1.1em',
              fontWeight: 'bold',
            }}
          >
            <Menu.Item key="10" onClick={() => router.push("/About")}>
              About
            </Menu.Item>
            <Menu.Item key="11" onClick={() => router.push("/CylinderGas")}>
              Cylinder Gas
            </Menu.Item>
            <Menu.Item key="12" onClick={() => router.push("/AutoGas")}>
              Auto Gas
            </Menu.Item>
            <Menu.Item key="13" onClick={() => router.push("/BulkGas")}>
              Bulk Gas
            </Menu.Item>
          </SubMenu>
        </Menu>
        {children}
      </Sider>
    </Layout>
  );
};

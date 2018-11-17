import React from "react";
import { observer } from "mobx-react";
import { Layout, Icon, Menu } from "antd";
// import { Link } from "react-router-dom";
import { presenter } from "hoc/Presenter";
import Presenter from "./SiderPM";
import Store from "./../Store";
import "./Sider.scss";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const MainSider = ({ pm }) => {
  return (
    <Sider trigger={null} collapsed={Store.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="dashboard" />
          <span>Dashboard</span>
          {/* <Link to={"/dashboard"}>Dashboard</Link> */}
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="book" />
              <span>Sub Menu</span>
            </span>
          }
        >
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default observer(presenter(Presenter, MainSider));

import React from "react";
import { observer } from "mobx-react";
import { Layout, Icon, Avatar, Popover } from "antd";
import { withRouter } from "react-router";
import { presenter } from "hoc/Presenter";
import Presenter from "./HeaderPM";
import Store from "./../Store";
import "./Header.scss";

const { Header } = Layout;

const MainHeader = ({ pm }) => {
  const content = (
    <div>
      <span onClick={pm.onLogout}>Logout</span>
    </div>
  );
  return (
    <Header
      style={{ background: "#fff", padding: "0px 0px 0px 15px" }}
      className="header"
    >
      <Icon
        className="trigger"
        type={Store.collapsed ? "menu-unfold" : "menu-fold"}
        onClick={Store.toggle}
      />
      <div className="user-avt">
        <Popover placement="bottom" content={content} trigger="click">
          <Avatar icon="user" />
        </Popover>
      </div>
    </Header>
  );
};

export default withRouter(observer(presenter(Presenter, MainHeader)));

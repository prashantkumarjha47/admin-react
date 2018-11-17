import React from "react";
import { observer } from "mobx-react";
import { presenter } from "hoc/Presenter";
import Presenter from "./LoginPM";
import { Form, Icon, Input, Button, Checkbox, Card } from "antd";
import { withRouter } from "react-router";
import "./Login.scss";

const FormItem = Form.Item;

const LoginPage = props => {
  const { getFieldDecorator } = props.form;

  return (
    <div>
      <div className="upper-layer" />
      <div className="login-page">
        <Card>
          <Form
            onSubmit={e => props.pm.handleSubmit(e, props.form)}
            className="login-form"
          >
            <FormItem>
              <h2>Login</h2>
            </FormItem>
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(
                <div>
                  <Checkbox style={{ float: "right" }}>Remember me</Checkbox>
                  <span
                    onClick={props.pm.handleForgotPassword}
                    style={{
                      float: "left",
                      color: "#1890ff",
                      cursor: "pointer"
                    }}
                  >
                    Forgot Password?
                  </span>
                </div>
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: "100%" }}
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    </div>
  );
};

const WrappedLoginPage = Form.create()(LoginPage);

export default withRouter(observer(presenter(Presenter, WrappedLoginPage)));

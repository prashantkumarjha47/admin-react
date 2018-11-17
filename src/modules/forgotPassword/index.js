import React from "react";
import { observer } from "mobx-react";
import { presenter } from "hoc/Presenter";
import Presenter from "./ForgotPasswordPM";
import { Form, Icon, Input, Button, Card } from "antd";
import { withRouter } from "react-router";
import "./ForgotPassword.scss";

const FormItem = Form.Item;

const ForgotPassword = props => {
  const { getFieldDecorator } = props.form;
  return (
    <div>
      <div className="upper-layer">
        {/* <div className="logo">
            <span>Locar</span>
          </div> */}
      </div>
      <div className="forgot-password">
        <Card>
          <Form
            onSubmit={e => props.pm.handleSubmit(e, props.form)}
            className="login-form"
          >
            <FormItem>
              <h2>Password Recovery</h2>
            </FormItem>
            <FormItem>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your email" }]
              })(
                <div>
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                  />
                  <div
                    style={{
                      textAlign: "left",
                      lineHeight: "20px",
                      padding: "5px"
                    }}
                  >
                    <span>
                      Insert your email and we’ll send you a link to the
                      password reset page.
                    </span>
                  </div>
                </div>
              )}
            </FormItem>
            <FormItem>
              <div style={{ display: "flex" }}>
                <div style={{ flex: "1" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Retrieve Password
                  </Button>
                </div>
                <div style={{ flex: "1" }}>
                  <Button
                    onClick={props.pm.onCancel}
                    className="login-form-button"
                  >
                    Wait, I remember!
                  </Button>
                </div>
              </div>
            </FormItem>
          </Form>
        </Card>
      </div>
    </div>
  );
};

const WrappedForgotPasswordPage = Form.create()(ForgotPassword);

export default withRouter(
  observer(presenter(Presenter, WrappedForgotPasswordPage))
);

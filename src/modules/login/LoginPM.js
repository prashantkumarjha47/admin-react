import Store from "commons/globals/Store";
class LoginPM {
  constructor(props) {
    this.props = props;
  }

  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.history.push("dashboard");
        Store.isLoggedIn = true;
      }
    });
  };

  handleForgotPassword = () => {
    this.props.history.push("forgotPassword");
  };
}

export default LoginPM;

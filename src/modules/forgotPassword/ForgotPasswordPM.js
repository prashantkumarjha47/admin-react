class ForgotPasswordPM {
  constructor(props) {
    this.props = props;
  }
  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  onCancel = () => {
    this.props.history.push("login");
  };
}

export default ForgotPasswordPM;

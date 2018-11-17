import Store from "../globals/Store";
export default class {
  constructor(props) {
    this.props = props;
  }
  onLogout = () => {
    Store.isLoggedIn = false;
    this.props.history.push("login");
  };
}

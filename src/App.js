import React, { Component } from "react";
import "./App.scss";
import { observer } from "mobx-react";
import Routes from "./Routes";
@observer
class App extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;

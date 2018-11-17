import React from "react";
import { observer } from "mobx-react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ModuleRoutes from "./modules";
import Login from "./modules/login";
import Store from "commons/globals/Store";
import ForgotPassword from "./modules/forgotPassword";

const Routes = () => {
  let isLoggedIn = Store.isLoggedIn;
  return (
    <main>
      {isLoggedIn ? (
        <Router>
          <Switch>
            <Route path="/" component={ModuleRoutes} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route component={Login} />
          </Switch>
        </Router>
      )}
    </main>
  );
};

export default observer(Routes);

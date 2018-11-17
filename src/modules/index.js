import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import MainLayout from "commons/layout/MainLayout";
import Loadable from "react-loadable";
import Login from "./login";

const Dashboard = Loadable({
  loader: () => import("./dashboard"),
  loading: () => null
});

const NoMatch = Loadable({
  loader: () => import("./NoMatch"),
  loading: () => null
});

const ModuleRoutes = () => {
  return (
    <main>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </Router>
    </main>
  );
};

export default observer(ModuleRoutes);

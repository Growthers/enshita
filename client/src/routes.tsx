import React from "react";
import { Route, Switch } from "wouter";
import { About, Home, AccountInfo } from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/account/info" component={AccountInfo} />
  </Switch>
);

export default Router;

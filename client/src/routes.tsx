import React from "react";
import { Route, Switch } from "wouter";
import { About, Home, Login } from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Router;

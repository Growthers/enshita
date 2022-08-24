import React from "react";
import { Route, Switch } from "wouter";
import {
  About,
  Home,
  RegisterAccount,
  RegisterAdmin,
} from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/account/register" component={RegisterAccount} />
    <Route path="/admin/register" component={RegisterAdmin} />
  </Switch>
);

export default Router;

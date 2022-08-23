import React from "react";
import { Route, Switch } from "wouter";
import {
  About,
  Home,
  Login,
  CreateAccount,
  RegisterAccount,
  RegisterAdmin,
} from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/account/create" component={CreateAccount} />
    <Route path="/account/register" component={RegisterAccount} />
    <Route path="/admin/register" component={RegisterAdmin} />
  </Switch>
);

export default Router;

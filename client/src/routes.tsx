import React from "react";
import { Route, Switch, Redirect } from "wouter";
import { About, Home, Event } from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />

    {/* event idがないときはindexへ飛ばす */}
    <Route path="/event">
      <Redirect to="/" />
    </Route>
    <Route path="/event/:id">{params => <Event eventId={params.id} />}</Route>
  </Switch>
);

export default Router;

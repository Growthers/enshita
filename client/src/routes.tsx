import React from "react";
import { Route, Switch } from "wouter";
import { About, Home, Event } from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />

    {/* event idがないときはindexを表示する */}
    <Route path="/event" component={Home} />
    <Route path="/event/:id">{params => <Event eventId={params.id} />}</Route>
  </Switch>
);

export default Router;

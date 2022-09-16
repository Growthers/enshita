import React from "react";
import { Route, Switch, Redirect } from "wouter";
import { LandingPage, Home, EventPage, ApplyFormPage, Stream } from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={LandingPage} />
    <Route path="/event">
      <Redirect to="/" />
    </Route>
    <Route path="/event/:id">
      {params => <EventPage eventId={params.id} />}
    </Route>
    <Route path="/apply">
      <Redirect to="/" />
    </Route>
    <Route path="/apply/:id">
      {params => <ApplyFormPage eventId={params.id} />}
    </Route>
    <Route path="/stream/:id">{params => <Stream eventId={params.id} />}</Route>
  </Switch>
);

export default Router;

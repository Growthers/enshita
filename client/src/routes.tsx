import React from "react";
import { Route, Switch, Redirect, Router as Wouter } from "wouter";
import { LandingPage, Home, EventPage, ApplyFormPage } from "./pages";

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
    <Wouter base="/stream">
      <Route path="/" component={Home} />
    </Wouter>
  </Switch>
);

export default Router;

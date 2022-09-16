import React from "react";
import { Route, Switch, Redirect, Router as Wouter } from "wouter";
import { LandingPage, PortalPage, EventPage, ApplyFormPage, AccountInfo } from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} />
    <Route path="/portal" component={PortalPage} />
    <Route path="/event">
      <Redirect to="/portal" />
    </Route>
    <Route path="/event/:id">
      {params => <EventPage eventId={params.id} />}
    </Route>
    <Wouter base="/account">
      <Route path="/info" component={AccountInfo} />
    </Wouter>
    <Route path="/apply">
      <Redirect to="/portal" />
    </Route>
    <Route path="/apply/:id">
      {params => <ApplyFormPage eventId={params.id} />}
    </Route>
    <Wouter base="/stream">
      <Route path="/portal" component={LandingPage} />
    </Wouter>
  </Switch>
);

export default Router;

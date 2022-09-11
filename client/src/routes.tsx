import React from "react";
import {
  Route,
  Switch,
  Router as Wouter,
  Redirect,
} from "wouter";
import { About, Home, AccountInfo, EventPage } from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    {/* event idがないときはindexへ飛ばす */}
    <Route path="/event">
      <Redirect to="/" />
    </Route>
    <Route path="/event/:id">
      {params => <EventPage eventId={params.id} />}
    </Route>
    <Wouter base="/account">
      <Route path="/info" component={AccountInfo} />
    </Wouter>
    <Wouter base="/stream">
      <Route path="/" component={Home} />
    </Wouter>
  </Switch>
);

export default Router;

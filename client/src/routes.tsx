import React from "react";
import {
  Route,
  Switch,
  useRouter,
  useLocation,
  Router as Wouter,
  Redirect,
  Link,
} from "wouter";
import { About, Home, AccountInfo, EventPage } from "./pages";

const NestedRoutes = ({
  base,
  children,
}: {
  base: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [parentLocation] = useLocation();

  const nestedBase = `${router.base}${base}`;
  if (!parentLocation.startsWith(nestedBase)) return null;

  return (
    <Wouter base={nestedBase} key={nestedBase}>
      {children}
    </Wouter>
  );
};

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
    <NestedRoutes base="/account">
      <Link to="/info" />
      <Route path="/info" component={AccountInfo} />
    </NestedRoutes>
    <Wouter base="/stream">
      <Route path="/" component={Home} />
    </Wouter>
  </Switch>
);

export default Router;

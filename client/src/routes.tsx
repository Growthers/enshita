import React from "react";
import {
  Route,
  Switch,
  useRouter,
  useLocation,
  Router as WRouter,
  Redirect,
  Link,
} from "wouter";
import { About, Home, AccountInfo, Event } from "./pages";

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
    <WRouter base={nestedBase} key={nestedBase}>
      {children}
    </WRouter>
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
    <Route path="/event/:id">{params => <Event eventId={params.id} />}</Route>
    <NestedRoutes base="/account">
      <Link to="/info" />
      <Route path="/info" component={AccountInfo} />
    </NestedRoutes>
  </Switch>
);

export default Router;

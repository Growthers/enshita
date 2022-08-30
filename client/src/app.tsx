import React from "react";
import { CookiesProvider } from "react-cookie";
import Router from "./routes";
import "~/styles/global.scss";
import "destyle.css";

const App = () => (
  <React.StrictMode>
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  </React.StrictMode>
);

export default App;

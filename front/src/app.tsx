import React from "react";
import Layout from "~/components/layout";
import Router from "./routes";
import "~/styles/global.scss";
import "normalize.css";

const App = () => (
  <React.StrictMode>
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>
);

export default App;

import React from "react";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";
import style from "~/styles/layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <React.Fragment key="layout">
    <Header />
    <main role="main" className={style["enshita-layout-body"]}>
      {children}
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;

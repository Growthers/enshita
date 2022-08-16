import React from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import style from "~/styles/layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Header />
    <main role="main" className={style["enshita-layout-body"]}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;

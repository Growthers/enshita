import type { FC } from "react";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";
import style from "~/styles/components/layout/layout.module.scss";
import {Fragment} from "react";
import {LayoutProperties} from "./type/model";


const Layout: FC<LayoutProperties> = ({ children }) => (
  <Fragment key="layout">
    <Header />
    <main className={style["enshita-layout-body"]}>
      {children}
    </main>
    <Footer />
  </Fragment>
);

export default Layout;

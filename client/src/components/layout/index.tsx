import type { FC } from "react";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";
import style from "~/styles/components/layout/layout.module.scss";
import { Fragment } from "react";
import { useRoute } from "wouter";
import { LayoutProperties } from "./type/model";

const Layout: FC<LayoutProperties> = ({ children }) => {
  const [match] = useRoute("/stream/:anything*");
  return (
    <Fragment key="layout">
      <Header disableStyle={match ? style["enshita-layout-disable"] : ""} />
      <main className={match ? "" : style["enshita-layout-body"]}>
        {children}
      </main>
      <Footer disableStyle={match ? style["enshita-layout-disable"] : ""} />
    </Fragment>
  );
};

export default Layout;

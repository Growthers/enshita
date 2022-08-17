import React from "react";
import Header from "~/components/header"
import Footer from "~/components/footer"
import style from "~/styles/layout.module.scss"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => (
  <div>
    <Header/>
    <div className={style["enshita-layout-body"]}>
      {children}
    </div>
    <Footer/>
  </div>
)

export default Layout

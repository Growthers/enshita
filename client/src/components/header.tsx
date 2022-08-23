import React from "react";
import styles from "~/styles/header.module.scss";

const Header: React.FC = () => (
  <header
    className={`${styles["enshita-header"]} ${styles["enshita-header-pc"]}`}
    role="banner"
  >
    <p className={styles["enshita-header-logo"]}>enshita</p>
    <p className={styles["enshita-header-hidden"]}>button</p>
  </header>
);

export default Header;

import React from "react";
import styles from "~/styles/components/layout/header.module.scss";

const Header: React.FC = () => (
  <header
    className={`${styles["enshita-header"]} ${styles["enshita-header-pc"]}`}
    role="banner"
  >
    <div className={styles["enshita-header-logo"]}>
      <svg width="140"  height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 50">
        <text x="0" y="40" fontSize={40} className={styles["enshita-header-svg"]}>enshita</text>
      </svg>
    </div>
    <div className={styles["enshita-header-hidden"]}>button</div>
  </header>
);

export default Header;

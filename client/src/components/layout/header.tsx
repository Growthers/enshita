import type { FC } from "react";
import styles from "~/styles/components/layout/header.module.scss";
import AnchorButton from "../button/anchor-button";

const Header: FC = () => (
  <header
    className={`${styles["enshita-header"]} ${styles["enshita-header-pc"]}`}
  >
    <div className={styles["enshita-header-logo"]}>
      <a href="./" rel="noopener noreferrer">
        <svg
          width="140"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140 50"
        >
          <text
            x="0"
            y="40"
            fontSize={40}
            className={styles["enshita-header-svg"]}
          >
            enshita
          </text>
        </svg>
      </a>
    </div>
    <div className={styles["enshita-header-hidden"]}>
      <AnchorButton
        variant="normal"
        href="./login"
        boxStyles={styles["enshita-header-button"]}
      >
        login
      </AnchorButton>
    </div>
  </header>
);

export default Header;

import type { FC } from "react";
import styles from "~/styles/components/layout/header.module.scss";
import { Link } from "wouter";
import AnchorButton from "../button/anchor-button";
import type { HeaderProperties } from "./type/model";

const Header: FC<HeaderProperties> = ({ disableStyle }) => (
  <header className={`${styles["enshita-header"]} ${disableStyle}`}>
    <div>
      <Link to="/">
        <img
          src="/statics/lyrics-dark.svg"
          alt="enshita logo"
          className={styles["enshita-header-logo-img"]}
        />
      </Link>
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

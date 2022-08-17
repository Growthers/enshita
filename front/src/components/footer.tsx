import React from "react";
import styles from "~/styles/footer.module.scss";

const Footer: React.FC = () => (
  <footer>
    <div className={styles["enshita-footer"]}>
      <div className={styles["enshita-footer-content"]}>
        <p
          className={`${styles["enshita-footer-logo"]} ${styles["enshita-footer-hidden"]}`}
        >
          enshita
        </p>
        <div className={styles["enshita-footer-menu"]}>
          <p className={styles["enshita-footer-about"]}>About Growthers</p>
          <ul className={styles["enshita-footer-list"]} role="menu">
            <li className={styles["enshita-footer-homepage"]}>
              <a
                href="https://growthers.dev/"
                className={`${styles["enshita-footer-link"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Home Page
              </a>
            </li>
            <li className={styles["enshita-footer-twitter"]}>
              <a
                href="https://twitter.com/UdcGrowthers/"
                className={`${styles["enshita-footer-link"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className={styles["enshita-footer-github"]}>
              <a
                href="https://github.com/Growthers/"
                className={`${styles["enshita-footer-link"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles["enshita-footer-copyright"]}>
        <small>Copyright &copy; 2022 Growthers</small>
      </p>
    </div>
  </footer>
);

export default Footer;
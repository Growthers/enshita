import React from "react";
import styles from "~/styles/components/layout/footer.module.scss";

const Footer: React.FC = () => (
  <footer>
    <div className={styles["enshita-footer"]}>
      <div className={styles["enshita-footer-content"]}>
        <div
          className={`${styles["enshita-footer-logo"]} ${styles["enshita-footer-hidden"]}`}
        >
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
              className={styles["enshita-footer-svg"]}
            >
              enshita
            </text>
          </svg>
        </div>
        <div className={styles["enshita-footer-menu"]}>
          <p className={styles["enshita-footer-about"]}>About Growthers</p>
          <ul className={styles["enshita-footer-list"]} role="navigation">
            <li className={styles["enshita-footer-homepage"]}>
              <a
                href="~/components/layout/footer"
                className={`${styles["enshita-footer-link"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Home Page
              </a>
            </li>
            <li className={styles["enshita-footer-twitter"]}>
              <a
                href="~/components/layout/footer"
                className={`${styles["enshita-footer-link"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className={styles["enshita-footer-github"]}>
              <a
                href="~/components/layout/footer"
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

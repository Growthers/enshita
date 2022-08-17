import React from "react";
import styles from "~/styles/footer.module.scss"

const Footer: React.FC = () => (
  <footer>
    <div className={styles["enshita-footer"]}>
        <div className={styles["enshita-footer-content"]}>
          <div className={`${styles["enshita-footer-logo"]} ${styles["enshita-footer-hidden"]}`}>
            enshita
          </div>
          <div className={styles["enshita-footer-menu"]}>
            <div className={styles["enshita-footer-about"]}>About Growthers</div>
            <a href="./" className={`${styles["enshita-footer-link"]} ${styles["enshita-footer-homepage"]}`}>Home Page</a>
            <a href="twitter" className={`${styles["enshita-footer-link"]} ${styles["enshita-footer-twitter"]}`}>Twitter</a>
            <a href="github" className={`${styles["enshita-footer-link"]} ${styles["enshita-footer-github"]}`}>GitHub</a>
          </div>
        </div>
      <div className={styles["enshita-footer-copyright"]}>
        Copyright &copy; 2022 Growthers
      </div>
    </div>
  </footer>
);

export default Footer

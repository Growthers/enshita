import type { FC } from "react";
import styles from "~/styles/components/layout/statusMessage.module.scss";

type StatusMessgeProps = {
  code: number;
  message: string;
};

const StatusMessge: FC<StatusMessgeProps> = ({ code, message }) => (
  <div className={styles["enshita-status-body"]}>
    <div className={styles["enshita-status-content"]}>
      <div className={styles["enshita-status-code"]}>
        <p>{code}</p>
      </div>
      <div className={styles["enshita-status-message"]}>
        <div className={styles["enshita-status-errormessage"]}>
          <p>{message}</p>
        </div>
        <div>
          <p>
            Oh... This URL is wrong.
            <br />
            please check again page URL.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default StatusMessge;

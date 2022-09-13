import type { FC } from "react";
import styles from "~/styles/components/status-message/status-message.module.scss";
import type { StatusMessageProps } from "./type/model";

const StatusMessage: FC<StatusMessageProps> = ({ code, message, children }) => (
  <div className={styles["enshita-status-body"]}>
    <div className={styles["enshita-status-content"]}>
      <div className={styles["enshita-status-code"]}>
        <p>{code}</p>
      </div>
      <div className={styles["enshita-status-message"]}>
        <div className={styles["enshita-status-errormessage"]}>
          <p>{message}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  </div>
);

export default StatusMessage;

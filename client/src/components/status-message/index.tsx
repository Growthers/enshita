import type { FC } from "react";
import styles from "~/styles/components/status-message/status-message.module.scss";
import type { StatusMessageProps } from "./type/model";
import Layout from "~/components/layout/layout";

const StatusMessage: FC<StatusMessageProps> = ({ code, message, children }) => (
  <Layout>
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
  </Layout>
);

export default StatusMessage;

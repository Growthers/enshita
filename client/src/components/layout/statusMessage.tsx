import type { FC } from "react";
import styles from "~/styles/components/layout/statusMessage.module.scss";
import type { StatusMessgeProps } from "~/components/layout/type/model";
import Layout from "~/components/layout/layout";

const StatusMessge: FC<StatusMessgeProps> = ({ code, message, children }) => (
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

export default StatusMessge;

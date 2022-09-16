import React from "react";

import styles from "~/styles/components/stream/oped.module.scss";

type Props = {
  message: string;
  subMessage: string;
};

const Oped: React.FC<Props> = ({ message, subMessage }) => (
  <div className={styles["enshita-stream-oped"]}>
    <div className={styles["enshita-stream-oped-massage"]}>{message}</div>
    <p className={styles["enshita-stream-oped-subMassage"]}>{subMessage}</p>
  </div>
);
export default Oped;

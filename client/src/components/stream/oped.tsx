import React from "react";

import styles from "~/styles/components/stream/oped.module.scss";

type Props = {
  massage: string;
  subMassage: string;
};

const Oped: React.FC<Props> = ({ massage, subMassage }) => (
  <div className={styles["enshita-stream-oped"]}>
    <div className={styles["enshita-stream-oped-massage"]}>{massage}</div>
    <p className={styles["enshita-stream-oped-subMassage"]}>{subMassage}</p>
  </div>
);
export default Oped;

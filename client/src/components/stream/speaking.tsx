import React from "react";

import { TalkInfoProperties } from "~/components/stream/type/model";

import styles from "~/styles/components/stream/speaking.module.scss";

const Speaking: React.FC<TalkInfoProperties> = ({
  order,
  speaker: { name, title },
}) => (
  <div className={styles["enshita-stream-speaking"]}>
    <div className={styles["enshita-stream-speaking-info"]}>
      <span className={styles["enshita-stream-speaking-info-large"]}>
        #{order}
      </span>
      <span className={styles["enshita-stream-speaking-info-large"]}>
        {title}
      </span>
      <span className={styles["enshita-stream-speaking-info-small"]}>
        {name}
      </span>
    </div>
  </div>
);

export default Speaking;

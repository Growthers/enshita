import React from "react";
import { TalkInfoProperties } from "~/components/stream/type/model";

import styles from "~/styles/components/stream/talkInfo.module.scss";

const TalkInfo: React.FC<TalkInfoProperties> = ({
  order,
  speaker: { name, title, duration },
}) => (
  <div className={styles["enshita-stream-talkInfo"]}>
    <div className={styles["enshita-stream-talkInfo-order"]}>#{order}</div>
    <div className={styles["enshita-stream-talkInfo-main"]}>
      <div className={styles["enshita-stream-talkInfo-title"]}>{title}</div>
      <p className={styles["enshita-stream-talkInfo-speakerName"]}>{name}</p>
    </div>
    <div className={styles["enshita-stream-talkInfo-comment"]}>{duration}</div>
  </div>
);

export default TalkInfo;

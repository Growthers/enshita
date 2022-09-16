import React from "react";

import { SpeakerProperties } from "~/components/stream/type/model";
import TalkInfo from "~/components/stream/talkInfo";

import styles from "~/styles/components/stream/breaking.module.scss";

type Props = {
  message: string;
  subMessage: string;
  order: number;
  nextSpeaker: SpeakerProperties;
};

const Breaking: React.FC<Props> = ({
  message,
  subMessage,
  order,
  nextSpeaker,
}) => (
  <div className={styles["enshita-stream-breaking"]}>
    <div className={styles["enshita-stream-breaking-message"]}>{message}</div>
    <p className={styles["enshita-stream-breaking-subMessage"]}>{subMessage}</p>
    <div className={styles["enshita-stream-breaking-next"]}>
      <div>Next...</div>
      <TalkInfo order={order} speaker={nextSpeaker} />
    </div>
  </div>
);

export default Breaking;

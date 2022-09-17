import React from "react";

import TalkInfo from "~/components/stream/talk-info";
import { SpeakerProperties } from "~/components/stream/type/model";

import styles from "~/styles/components/stream/changing.module.scss";

type Props = {
  order: number;
  speakers: SpeakerProperties[];
};

const Changing: React.FC<Props> = ({ order, speakers }) => (
  <div className={styles["enshita-stream-changing"]}>
    <div className={styles["enshita-stream-changing-next"]}>Next…</div>
    <div className={styles["enshita-stream-changing-talkInfos"]}>
      {speakers.slice(0, 3).map(value => (
        <TalkInfo key={value.id} order={order} speaker={value} />
      ))}
    </div>
  </div>
);

export default Changing;

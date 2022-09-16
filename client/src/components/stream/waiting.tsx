import React from "react";
import Clock from "~/components/stream/clock";
import styles from "~/styles/components/stream/waiting.module.scss";
import { ClockProperties } from "~/components/stream/type/model";

type Props = {
  title: string;
  subtitle: string;
  startDate: ClockProperties;
};

const Waiting: React.FC<Props> = ({ title, subtitle, startDate }) => (
  <div className={styles["enshita-stream-waiting"]}>
    <h1 className={styles["enshita-stream-waiting-title"]}>{title}</h1>
    <p className={styles["enshita-stream-waiting-subtitle"]}>{subtitle}</p>
    <div className={styles["enshita-stream-waiting-clock"]}>
      <Clock time={startDate} />
    </div>
    <div className={styles["enshita-stream-waiting-massage"]}>
      しばらくお待ちください
    </div>
  </div>
);

export default Waiting;

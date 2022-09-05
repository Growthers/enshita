import React from "react";
import Clock from "~/components/stream/clock";
import styles from "~/styles/components/stream/waiting.module.scss";

type Props = {
  RemainingTime: {
    first: number;
    second: number;
  };
  title: string;
  subtitle: string;
  massage: string;
};

const Waiting: React.FC<Props> = ({
  RemainingTime,
  title,
  subtitle,
  massage,
}) => (
  <div className={styles["enshita-stream-waiting"]}>
    <h1 className={styles["enshita-stream-waiting-title"]}>{title}</h1>
    <p className={styles["enshita-stream-waiting-subtitle"]}>{subtitle}</p>
    <div className={styles["enshita-stream-waiting-clock"]}>
      <Clock time={RemainingTime} />
    </div>
    <div className={styles["enshita-stream-waiting-massage"]}>{massage}</div>
  </div>
);

export default Waiting;

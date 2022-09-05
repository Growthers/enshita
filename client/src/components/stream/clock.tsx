import React from "react";
import styles from "~/styles/components/stream/clock.module.scss";
import { zeroPadding } from "~/utils/time";

type Props = {
  time: {
    first: number;
    second: number;
  };
  css: string | undefined;
};

const Clock: React.FC<Props> = ({ time, css }) => (
  <div className={`${styles["enshita-stream-clock"]} ${css}`}>
    {zeroPadding(time.first)}:{zeroPadding(time.second)}
  </div>
);
export default Clock;

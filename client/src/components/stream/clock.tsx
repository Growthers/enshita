import React from "react";
import styles from "~/styles/components/stream/clock.module.scss";
import { zeroPadding } from "~/utils/time";
import { ClockProperties } from "~/components/stream/type/model";

type Props = {
  time: ClockProperties;
};

const Clock: React.FC<Props> = ({ time: { first, second } }) => (
  <div className={styles["enshita-stream-clock"]}>
    {zeroPadding(first)}:{zeroPadding(second)}
  </div>
);
export default Clock;

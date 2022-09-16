import React from "react";

import { TalkInfoProperties } from "~/components/stream/type/model";

import styles from "~/styles/components/stream/speaking.module.scss";

const Speaking: React.FC<TalkInfoProperties> = ({
  order,
  speaker: { name, title },
}) => (
  <div>
    <div className={styles["enshita-stream-"]} />
    <div>
      <div>#{order}</div>
      <div>{title}</div>
      <p>{name}</p>
    </div>
  </div>
);

export default Speaking;

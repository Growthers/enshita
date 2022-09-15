import { memo } from "react";
import styles from "~/styles/components/event-card/chip.module.scss"
import type { ChipProperties } from "./type/model";

// eslint-disable-next-line react/display-name,react/prop-types
const Chip = memo<ChipProperties>(({ status, ...rest}) => {
  let color;
  let content;
  switch(status) {
    case "preparing":
      color = styles["enshita-event-card-status-gray"]
      content = "参加登録受付前"
      break
    case "open":
      color = styles["enshita-event-card-status-green"]
      content = "参加登録受付中"
      break
    case "close":
      color = styles["enshita-event-card-status-gray"]
      content = "参加登録締切済み"
      break
    case "suddenOpen":
      color = styles["enshita-event-card-status-green"]
      content = "飛び入り参加登録受付中"
      break
    case "suddenClose":
      color = styles["enshita-event-card-status-gray"]
      content = "飛び入り参加登録受付終了"
      break
    case "finish":
      color = styles["enshita-event-card-status-gray"]
      content = "イベント終了"
      break
    // no default
  }
  return (
    <div className={`${styles["enshita-event-card-chip"]} ${color}`} {...rest}>
      <p className={styles["enshita-event-card-chip-content"]}>{content}</p>
    </div>
  )
})

export { Chip }

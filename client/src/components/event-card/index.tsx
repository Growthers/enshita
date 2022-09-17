import type { FC } from "react";
import { Link } from "wouter";
import { useMemo } from "react";
import dayjs from "dayjs";
import styles from "~/styles/components/event-card/event-card.module.scss";
import type { EventCardProperties } from "./type/model";
import { Chip } from "./chip";

const EventCard: FC<EventCardProperties> = ({
  eventId,
  title,
  startDate,
  ogp,
  status,
  hashTag,
  speakerQuotaTypeList,
}) => {
  const memo = useMemo(() => {
    let current = 0;
    let total = 0;
    speakerQuotaTypeList.forEach(speakerQuotaType => {
      current += speakerQuotaType.currentCount;
      total += speakerQuotaType.total;
    });
    return {
      current,
      total,
    };
  }, [speakerQuotaTypeList]);
  return (
    <Link to={`/event/${eventId}`}>
      <div className={styles["enshita-event-card"]}>
        <div className={styles["enshita-event-card-image-wrapper"]}>
          <img
            src={ogp}
            alt={title}
            className={styles["enshita-event-card-image"]}
          />
        </div>
        <div className={styles["enshita-event-card-content-wrapper"]}>
          <div className={styles["enshita-event-card-content"]}>
            <h1 className={styles["enshita-event-card-title"]}>{title}</h1>
            <div className={styles["enshita-event-card-sub-content"]}>
              <time className={styles["enshita-event-card-date"]}>
                {dayjs(startDate).format("MMM DD")}
              </time>
              <p className={styles["enshita-event-card-hash-tag"]}>{hashTag}</p>
            </div>
          </div>
          <div className={styles["enshita-event-card-option"]}>
            <p className={styles["enshita-event-card-num-of-speaker"]}>
              <span className={styles["enshita-event-card-slash"]}>
                {memo.current}
              </span>
              {memo.total}
            </p>
            <Chip status={status} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

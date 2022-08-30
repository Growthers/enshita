import React from "react";

import { str2Date, getDateInfo, getDateDiff, fillzero } from "~/utils/date";
import styles from "~/styles/components/event/date.module.scss";

type Props = {
  startStrDate: string;
  endStrDate: string;
};

const EventDate: React.FC<Props> = props => {
  const { startStrDate, endStrDate } = props;
  const startDate = str2Date(startStrDate);
  const endDate = str2Date(endStrDate);

  if (startDate === null || endDate === null)
    return (
      <div className={styles["enshita-event-date"]}>
        <p>No Date</p>
      </div>
    );

  const startDateInfo = getDateInfo(startDate);
  const endDateInfo = getDateInfo(endDate);

  const nextDate = new Date(
    startDateInfo.year,
    startDateInfo.month - 1,
    startDateInfo.day,
  );
  nextDate.setDate(nextDate.getDate() + 1);
  const { diff } = getDateDiff(startDate, endDate);
  const { diff: nextDayDiff } = getDateDiff(startDate, nextDate);

  // 翌日の朝4時までにイベントが終わるとき
  if (diff - nextDayDiff <= 3600 * 4) {
    const endHour =
      startDateInfo.hour <= endDateInfo.hour
        ? endDateInfo.hour
        : 24 + endDateInfo.hour;
    return (
      <div className={styles["enshita-event-date"]}>
        <time>{`${startDateInfo.strYear}/${startDateInfo.strMonth}/${startDateInfo.strDay} (${startDateInfo.dayOfWeek})`}</time>
        <time>
          <span>{`${startDateInfo.strHour}:${
            startDateInfo.strMinute
          } ~ ${fillzero(endHour, 2)}:${endDateInfo.strMinute}`}</span>
        </time>
      </div>
    );
  }

  return (
    <div className={styles["enshita-event-date"]}>
      <time>
        <span>
          {`${startDateInfo.strYear}/${startDateInfo.strMonth}/${startDateInfo.strDay} (${startDateInfo.dayOfWeek}) ${startDateInfo.strHour}:${startDateInfo.strMinute} ~`}
        </span>
      </time>
      <time>
        <span>{`${endDateInfo.strYear}/${endDateInfo.strMonth}/${endDateInfo.strDay} (${endDateInfo.dayOfWeek}) ${endDateInfo.strHour}:${endDateInfo.strMinute}`}</span>
      </time>
    </div>
  );
};

export default EventDate;

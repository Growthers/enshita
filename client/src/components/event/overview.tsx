import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import type { Event } from "~/types/global-models";
import EventDate from "~/components/event/date";
import Button from "~/components/button/button";
import AnchorButton from "~/components/button/anchor-button";
import { str2Date, getDateInfo } from "~/utils/date";
import styles from "~/styles/components/event/overview.module.scss";
import type { FC } from "react"

const EventOverview: FC<Omit<Event, "title" | "description" | "ogp">> = ({
  eventId,
  startDate,
  endDate,
  status,
  deadline,
  speakerQuotaTypeList,
  venue = "",
}) => {
  const deadlineDate = str2Date(deadline);
  const deadlineInfo = deadlineDate ? getDateInfo(deadlineDate) : null;
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState<string | undefined>(undefined);
  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    switch (status) {
      case "preparing":
        setButtonText("申し込み開始前");
        setButtonLink(undefined);
        setButtonDisable(true);
        break;
      case "open":
        setButtonText("申し込む");
        setButtonLink(`/apply/${eventId}`);
        setButtonDisable(false);
        break;
      case "close":
        setButtonText("申し込みは終了しました");
        setButtonLink(undefined);
        setButtonDisable(true);
        break;
      case "suddenOpen":
        setButtonText("飛び入りで申し込む");
        setButtonLink(`/apply/${eventId}`);
        setButtonDisable(false);
        break;
      case "suddenClose":
        setButtonText("申し込みは終了しました");
        setButtonLink(undefined);
        setButtonDisable(true);
        break;
      case "finish":
        setButtonText("イベントは終了しました");
        setButtonLink(undefined);
        setButtonDisable(true);
        break;
      default:
        setButtonText("");
        setButtonLink(undefined);
        setButtonDisable(true);
        break;
    }
  }, [eventId, status]);

  return (
    <div className={styles["enshita-event-overview"]}>
      <EventDate startStrDate={startDate} endStrDate={endDate} />
      {venue && (
        <div className={styles["enshita-event-venue"]}>
          <Icon icon="bytesize:location" />
          <p>{venue}</p>
        </div>
      )}
      <div className={styles["enshita-event-apply"]}>
        {buttonDisable ? (
          <Button
            variant="normal"
            boxStyles={styles["enshita-event-apply-box"]}
            disabled={buttonDisable}
          >
            {buttonText}
          </Button>
        ) : (
          <AnchorButton
            variant="normal"
            href={buttonLink}
            boxStyles={styles["enshita-event-apply-box"]}
            isSameOrigin
          >
            {buttonText}
          </AnchorButton>
        )}
      </div>
      <div className={styles["enshita-event-deadline"]}>
        <time>
          {deadlineInfo
            ? `${deadlineInfo.strYear}/${deadlineInfo.strMonth}/${deadlineInfo.strDay} (${deadlineInfo.dayOfWeek}) ${deadlineInfo.strHour}:${deadlineInfo.strMinute}まで`
            : "No Date"}
        </time>
        <p>※申し込み締切時間は変更される可能性があります</p>
      </div>
      <div className={styles["enshita-event-speaker-quota-type-list"]}>
        {speakerQuotaTypeList.map(speakerQuotaType => (
          <div
            className={styles["enshita-event-speaker-quota-type"]}
            key={speakerQuotaType.id}
          >
            <p className={styles["enshita-event-speaker-quota-type-name"]}>
              {speakerQuotaType.name}
            </p>
            <p className={styles["enshita-event-speaker-quota-type-currently"]}>
              {speakerQuotaType.currentCount} / {speakerQuotaType.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventOverview;

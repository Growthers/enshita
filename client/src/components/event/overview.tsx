import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import type { SpeakerQuotaType } from "~/pages/event";
import EventDate from "~/components/event/date";
import { AnchorButton } from "~/components/button/anchor-button";
import { str2DateInfo } from "~/utils/date";
import styles from "~/styles/event/overview.module.scss";

type Props = {
  eventId: string;
  startDate: string;
  endDate: string;
  status:
    | "preparing"
    | "open"
    | "close"
    | "suddenOpen"
    | "suddenClose"
    | "finish";
  deadline: string;
  speakerQuotaTypeList: SpeakerQuotaType[];
  venue?: string;
};

const EventOverview: React.FC<Props> = props => {
  const {
    eventId,
    startDate,
    endDate,
    status,
    deadline,
    speakerQuotaTypeList,
    venue,
  } = props;
  const deadlineInfo = str2DateInfo(deadline);
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState<string | undefined>(undefined);

  useEffect(() => {
    switch (status) {
      case "preparing":
        setButtonText("申し込み開始前");
        setButtonLink(undefined);
        break;
      case "open":
        setButtonText("申し込む");
        setButtonLink(`/apply/${eventId}`);
        break;
      case "close":
        setButtonText("申し込みは終了しました");
        setButtonLink(undefined);
        break;
      case "suddenOpen":
        setButtonText("飛び入りで申し込む");
        setButtonLink(`/apply/${eventId}`);
        break;
      case "suddenClose":
        setButtonText("申し込みは終了しました");
        setButtonLink(undefined);
        break;
      case "finish":
        setButtonText("イベントは終了しました");
        setButtonLink(undefined);
        break;
      default:
        setButtonText("");
        setButtonLink(undefined);
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
        <AnchorButton
          variant="normal"
          href={buttonLink}
          boxStyles={styles["enshita-event-apply-box"]}
          isSamePage
        >
          {buttonText}
        </AnchorButton>
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

EventOverview.defaultProps = {
  venue: "",
};

export default EventOverview;

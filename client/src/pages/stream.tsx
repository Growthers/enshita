import React from "react";
import useSWR from "swr";

import LeftSide from "~/components/stream/leftSide";
import Comment from "~/components/stream/comment";
import Clock from "~/components/stream/clock";

import { Event } from "~/types/global-models";
import { SpeakerProperties } from "~/components/stream/type/model";

import useWebSocket from "~/hooks/useWebSocket";
import useCurrentTime from "~/hooks/useCurrentTime";

import styles from "~/styles/components/stream/stream.module.scss";
import { fetcher } from "~/libs/axios";

type Props = {
  eventId: string;
};

const Stream: React.FC<Props> = ({ eventId }) => {
  const { scene, commentsList, speakerQuotaTypeId } = useWebSocket(
    import.meta.env.VITE_WS_ORIGIN,
  );
  const currentTime = useCurrentTime();

  const { data: eventData } = useSWR<Event>(`/events/${eventId}`, fetcher);
  const { data: speakersData } = useSWR<SpeakerProperties[]>(
    `/events/${eventId}/speaker`,
    fetcher,
  );

  if (eventData !== undefined && speakersData !== undefined)
    return (
      <div className={styles["enshita-stream"]}>
        <LeftSide
          scene={scene}
          currentTime={currentTime}
          speakerQuotaTypeId={speakerQuotaTypeId}
          eventData={eventData}
          speakersData={speakersData}
        />

        <div className={styles["enshita-stream-display-comments"]}>
          {commentsList.reverse().map(value => (
            <Comment key={`${value.name}${value.content}`} comment={value} />
          ))}
        </div>

        <div className={styles["enshita-stream-display-clock"]}>
          <Clock
            time={{
              first: currentTime.hour(),
              second: currentTime.minute(),
            }}
          />
          <p>#{eventData.title}</p>
        </div>
      </div>
    );

  return <div>loading</div>;
};

export { Stream };

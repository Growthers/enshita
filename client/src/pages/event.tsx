import React, { useEffect, useState } from "react";
import { Redirect } from "wouter";

import Layout from "~/components/layout/layout";
import EventOverview from "~/components/event/overview";
import EventDescription from "~/components/event/description";
import TweetButton from "~/components/button/tweet-button";
import { client } from "~/libs/apiClient";
import styles from "~/styles/pages/event.module.scss";

// 登壇枠の型
export type SpeakerQuotaType = {
  id: string;
  name: string;
  time: number;
  currentCount: number;
  total: number;
};

type Data = {
  eventId: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  venue?: string;
  ogp: string;
  status:
    | "preparing"
    | "open"
    | "close"
    | "suddenOpen"
    | "suddenClose"
    | "finish";
  hashTag?: string;
  deadline: string;
  speakerQuotaTypeList: SpeakerQuotaType[];
};

type Props = {
  eventId: string;
};

const Event: React.FC<Props> = props => {
  const { eventId } = props;
  const [data, setData] = useState<Data>();
  const [err, setErr] = useState(false);

  useEffect(() => {
    client
      .get<Data>(`/events/${eventId}`)
      .then(r => {
        setData(r.data);
      })
      .catch(() => {
        setErr(true);
      });
  }, [eventId]);

  if (err) return <Redirect to="/" />;
  if (data === undefined) return <p>Loading...</p>;

  return (
    <Layout>
      <div className={styles["enshita-event"]}>
        <h1 className={styles["enshita-event-title"]}>{data.title}</h1>
        <div className={styles["enshita-event-ogp-overview"]}>
          <img
            className={styles["enshita-event-ogp"]}
            src={data.ogp}
            alt={data.title}
          />
          <div className={styles["enshita-event-overview"]}>
            <EventOverview
              eventId={eventId}
              startDate={data.startDate}
              endDate={data.endDate}
              venue={data.venue}
              status={data.status}
              deadline={data.deadline}
              speakerQuotaTypeList={data.speakerQuotaTypeList}
            />
          </div>
        </div>
        <div className={styles["enshita-event-details"]}>
          <div className={styles["enshita-event-description"]}>
            <EventDescription description={data.description} />
          </div>
          <div className={styles["enshita-event-tweet"]}>
            <TweetButton
              text={data.title}
              url={window.location.href}
              hashtags={data.hashTag ? [data.hashTag] : undefined}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { Event };

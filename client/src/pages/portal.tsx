import type { FC } from "react";
import EventCard from "~/components/event-card";
import { fetcher } from "~/libs/axios";
import useSWR from "swr";
import type { Event } from "~/types/global-models";
import { Redirect } from "wouter";
import styles from "~/styles/pages/portal.module.scss";

const PortalPage: FC = () => {
  const { data, error } = useSWR<Array<Event>>("/events", fetcher);
  if (!data) return <p>Loading...</p>;
  if (error) return <Redirect to="/portal" />;
  return (
    <section className={styles["enshita-home-page"]}>
      <h1 className={styles["enshita-home-page-title"]}>イベント一覧</h1>
      <div className={styles["enshita-home-page-events"]}>
        {data.map(event => (
          <EventCard
            eventId={event.eventId}
            title={event.title}
            startDate={event.startDate}
            ogp={event.ogp}
            status={event.status}
            hashTag={event.hashTag}
            speakerQuotaTypeList={event.speakerQuotaTypeList}
            key={event.eventId}
          />
        ))}
      </div>
    </section>
  );
};

export { PortalPage };

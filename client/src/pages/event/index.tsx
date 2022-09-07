import type { FC } from "react";
import { Redirect } from "wouter";
import useSWR from "swr"
import Layout from "~/components/layout/layout";
import EventOverview from "~/components/event/overview";
import EventDescription from "~/components/event/description";
import TweetButton from "~/components/button/tweet-button";
import { fetcher } from "~/libs/axios";
import styles from "~/styles/pages/event.module.scss";
import type { Event } from "~/types/global-models";
import type {EventPageProperties} from "./type/model";

const EventPage: FC<EventPageProperties> = props => {
  const { eventId } = props;
  const { data, error } = useSWR<Event>(`/events/${eventId}`, fetcher)
  if (error) return <Redirect to="/" />;
  if (!data) return <p>Loading...</p>;
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

export { EventPage };

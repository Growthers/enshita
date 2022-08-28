import React from "react";

import styles from "~/styles/event/description.module.scss";

type Props = {
  description: string;
};

const EventDescription: React.FC<Props> = props => {
  const { description } = props;
  const urlPattern = /https?:\/\/[\w!?/+\-_~;.,*&@#$%=']+/gim;
  const URL = description.match(urlPattern) ?? [];

  return (
    <p className={styles["enshita-event-description-content"]}>
      {description
        .replace(/\\n/g, "\n")
        .split(urlPattern)
        .map((v, i) => (
          <span key={v}>
            {v}
            {URL[i] && (
              <a
                className={styles["enshita-event-description-link"]}
                href={URL[i]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {URL[i]}
              </a>
            )}
          </span>
        ))}
    </p>
  );
};

export default EventDescription;

import React from "react";

import styles from "~/styles/event/description.module.scss";

type Props = {
  description: string;
};

const EventDescription: React.FC<Props> = props => {
  const { description } = props;
  // descriptionの中からURLを抽出して配列に
  const urlPattern = /https?:\/\/[\w!?/+\-_~;.,*&@#$%=']+/gim;
  const URL = description.match(urlPattern) ?? [];

  return (
    <p className={styles["enshita-event-description-content"]}>
      {description
        // APIからは\\nが返ってくるので\nに置き換える
        .replace(/\\n/g, "\n")
        // URLで区切る（コンテンツの配列）
        .split(urlPattern)
        // contentとURLを交互に挿入
        // content0, url0, content1, url1, content2...
        .map((content, index) => (
          <span key={content}>
            {content}
            {URL[index] && (
              <a
                className={styles["enshita-event-description-link"]}
                href={URL[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {URL[index]}
              </a>
            )}
          </span>
        ))}
    </p>
  );
};

export default EventDescription;

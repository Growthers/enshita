import React from "react";
import { InlineIcon } from "@iconify/react";
import { CommentProperties } from "~/components/stream/type/model";

import styles from "~/styles/components/stream/comment.module.scss";

type Props = {
  comment: CommentProperties;
};

const Comment: React.FC<Props> = ({
  comment: { platform, name, iconUrl, content },
}) => (
  <div className={styles["enshita-stream-comment"]}>
    <p className={styles["enshita-stream-comment-content"]}>
      {content.length > 50 ? `${content.slice(0, 50)}…` : content}
    </p>
    <div className={styles["enshita-stream-comment-user"]}>
      <img
        className={styles["enshita-stream-comment-user-icon"]}
        src={iconUrl}
        alt="icon"
      />
      <span className={styles["enshita-stream-comment-user-name"]}>{name}</span>
      <InlineIcon
        icon={
          platform === "twitter"
            ? "akar-icons:twitter-fill"
            : "akar-icons:discord-fill"
        }
      />
    </div>
  </div>
);

export default Comment;

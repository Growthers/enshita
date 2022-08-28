import React from "react";
import { AnchorButton } from "~/components/button/anchor-button";
import styles from "~/styles/components/button/tweet-button.module.scss";

type Props = {
  text: string;
  url?: string;
  hashtags?: string[];
};

const TweetButton: React.FC<Props> = props => {
  const { text, url, hashtags } = props;
  const tweetLink = () => {
    const parts = ["https://twitter.com/intent/tweet"];
    parts.push(`?text=${text.replace(/ /g, "%20")}`);
    if (url) parts.push(`&url=${url}`);
    // # を除去して , 区切りの文字列にする
    if (hashtags)
      parts.push(
        `&hashtags=${hashtags.map(v => v.replace("#", "")).join(",")}`,
      );
    return parts.join("");
  };

  return (
    <AnchorButton
      variant="icon"
      href={tweetLink()}
      icon="akar-icons:twitter-fill"
      iconStyles={styles["enshita-event-tweet-icon"]}
      boxStyles={styles["enshita-event-tweet-box"]}
      textStyles={styles["enshita-event-tweet-text"]}
    >
      Tweet
    </AnchorButton>
  );
};

TweetButton.defaultProps = {
  url: "",
  hashtags: [],
};

export default TweetButton;

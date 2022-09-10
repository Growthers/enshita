import type { FC } from "react";
import AnchorButton from "~/components/button/anchor-button";
import styles from "~/styles/components/button/tweet-button.module.scss";
import type {TwitterButtonProperties} from "./type/model";


const TweetButton: FC<TwitterButtonProperties> = ({ text, url = "", hashtags = [] }) => {
  // URL, hashtagsがないときはパラメータの値がなにもないが、問題なく指定した項目のみでTweet可能
  const tweetLink = `https://twitter.com/intent/tweet?text=${text.replace(
    / /g,
    "%20",
  )}&url=${url}&hashtags=${
    hashtags ? hashtags.map(v => v.replace("#", "")).join(",") : ""
  }`;

  return (
    <AnchorButton
      variant="icon"
      href={tweetLink}
      icon="akar-icons:twitter-fill"
      iconStyles={styles["enshita-event-tweet-icon"]}
      boxStyles={styles["enshita-event-tweet-box"]}
      textStyles={styles["enshita-event-tweet-text"]}
    >
      Tweet
    </AnchorButton>
  );
};

export default TweetButton;

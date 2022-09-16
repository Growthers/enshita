import type { FC } from "react";
import AnchorButton from "~/components/button/anchor-button";
import StatusMessage from "~/components/status-message";
import styles from "~/styles/pages/not-found.module.scss"

const NotFound: FC = () => (
  <StatusMessage code={404} message="Page Not Found">
    <p>Page not implemented or not found.</p>
    <p>Please check the URL again.</p>
    <p>
      <AnchorButton
        variant="normal"
        href="/"
        isSameOrigin
        boxStyles={styles["enshita-notfound-button"]}
      >
        top
      </AnchorButton>
    </p>
  </StatusMessage>
);

export { NotFound };

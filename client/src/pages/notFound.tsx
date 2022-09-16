import type { FC } from "react";
import StatusMessage from "~/components/status-message";

const NotFound: FC = () => (
  <StatusMessage code={404} message="Page Not Found">
    <p>Page not implemented or not found.</p>
    <p>Please check the URL again.</p>
  </StatusMessage>
);

export { NotFound };

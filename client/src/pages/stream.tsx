import React from "react";

type Props = {
  eventId: string;
};

const Stream: React.FC<Props> = ({ eventId }) => (
  <div>
    <div>This is stream page</div>
    <div>{eventId}</div>
  </div>
);

export { Stream };

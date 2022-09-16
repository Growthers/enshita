import React from "react";
import dayjs from "dayjs";

import Waiting from "~/components/stream/waiting";
import Oped from "~/components/stream/oped";
import Changing from "~/components/stream/changing";
import Breaking from "~/components/stream/breaking";

import { timeDiff } from "~/utils/time";

import { Event } from "~/types/global-models";
import { SceneType, SpeakerProperties } from "~/components/stream/type/model";
import Speaking from "~/components/stream/speaking";

type Props = {
  scene: SceneType;
  currentTime: dayjs.Dayjs;
  speakerQuotaTypeId: string;
  eventData: Event;
  speakersData: SpeakerProperties[];
};

const LeftSide: React.FC<Props> = ({
  scene,
  currentTime,
  speakerQuotaTypeId,
  eventData,
  speakersData,
}) => {
  const nextSpeakerIndex = speakersData.findIndex(
    element => element.id === speakerQuotaTypeId,
  );

  switch (scene) {
    case "WAITING":
      return (
        <Waiting
          title={eventData.title}
          subtitle="サブタイトル"
          startDate={timeDiff(currentTime, dayjs(eventData.startDate))}
        />
      );
    case "OPENING":
    case "ENDING":
      return (
        <Oped message="ここにメッセージ" subMessage="ここにもメッセージ" />
      );

    case "SPEAKING":
      return (
        <Speaking
          order={1}
          speaker={{ id: "aaa", title: "aaa", name: "aaa", duration: "aaa" }}
        />
      );

    case "CHANGING":
      return (
        <Changing
          order={nextSpeakerIndex}
          speakers={speakersData.slice(
            nextSpeakerIndex - 1,
            nextSpeakerIndex + 2,
          )}
        />
      );

    case "BREAKING":
      return (
        <Breaking
          message="休憩中ですみたいなメッセージを設定可能"
          subMessage="ここにもメッセージ"
          order={nextSpeakerIndex}
          nextSpeaker={speakersData[nextSpeakerIndex]}
        />
      );

    default:
      break;
  }

  return <div>loading</div>;
};

export default LeftSide;

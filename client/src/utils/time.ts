import dayjs from "dayjs";
import { ClockProperties } from "~/components/stream/type/model";

export const zeroPadding = (num: number) => `00${num}`.slice(-2);

export const timeDiff = (
  currentTime: dayjs.Dayjs,
  targetTime: dayjs.Dayjs,
): ClockProperties => {
  const diffHour = targetTime.diff(currentTime, "hour");
  const diffMinute = targetTime.diff(currentTime, "minute") - diffHour * 60;
  const diffSecond = targetTime.diff(currentTime, "second") - diffMinute * 60;

  if (diffHour === 0) {
    return {
      first: diffMinute,
      second: diffSecond,
    };
  }

  return {
    first: diffHour,
    second: diffMinute,
  };
};

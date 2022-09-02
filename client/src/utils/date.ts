export const fillzero = (num: number, digit: number) =>
  `${"0".repeat(digit)}${num}`.slice(-1 * digit);

// ISO8601形式の文字列を日付型に変換
export const str2Date = (str: string) => {
  // 19700101T090000+0900 の可能性があるので
  // 1970-01-01T09:00:00+09:00への変換

  try {
    const data = str.split("T");
    const isUTC = str.endsWith("Z");

    const strDate = data[0].split("-").join("");
    const strTime = data[1].split(":").join("").split("+").join("");

    const year = strDate.slice(0, 4);
    const month = strDate.slice(4, 6);
    const day = strDate.slice(6, 8);
    const hour = strTime.slice(0, 2);
    const minute = strTime.slice(2, 4);
    const second = strTime.slice(4, 6);

    const timezoneHour = isUTC ? "" : strTime.slice(6, 8);
    const timezoneMinute = isUTC ? "" : strTime.slice(8, 10);
    const timezone = isUTC ? "Z" : `+${timezoneHour}:${timezoneMinute}`;

    const datetime = `${year}-${month}-${day}T${hour}:${minute}:${second}${timezone}`;

    return new Date(datetime);
  } catch (e) {
    return null;
  }
};

export const getDateInfo = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    date.getDay()
  ];

  const data = {
    year,
    month,
    day,
    hour,
    minute,
    second,
    dayOfWeek,
    strYear: fillzero(year, 4),
    strMonth: fillzero(month, 2),
    strDay: fillzero(day, 2),
    strHour: fillzero(hour, 2),
    strMinute: fillzero(minute, 2),
    strSecond: fillzero(second, 2),
  };

  return data;
};

export const getUNIXTime = (date: Date) => Math.floor(date.getTime() / 1000);

export const getDateDiff = (date1: Date, date2: Date) => {
  const diff = Math.abs(getUNIXTime(date1) - getUNIXTime(date2));

  // diffを日にち、時間、分、秒に変換する
  const second = diff % 60;
  const minute = Math.floor((diff % 3600) / 60);
  const hour = Math.floor((diff % 86400) / 3600);
  const day = Math.floor(diff / 86400);

  const data = {
    diff,
    second,
    minute,
    hour,
    day,
  };

  return data;
};

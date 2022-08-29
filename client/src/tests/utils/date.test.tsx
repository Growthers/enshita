import {
  fillzero,
  str2Date,
  getDateInfo,
  getUNIXTime,
  getDateDiff,
} from "~/utils/date";

describe("fillzero", () => {
  test("5: number -> 05: string", () => {
    const result = fillzero(5, 2);
    expect(result).toBe("05");
  });

  test("2022: number -> 2022: string", () => {
    const result = fillzero(2022, 4);
    expect(result).toBe("2022");
  });
});

describe("str2Date", () => {
  test("19700101T090000+0900", () => {
    const result = str2Date("19700101T090000+0900");
    expect(result).toEqual(new Date("1970-01-01T09:00:00+09:00"));
  });

  test("1970-01-01T09:00:00+09:00", () => {
    const result = str2Date("1970-01-01T09:00:00+09:00");
    expect(result).toEqual(new Date("1970-01-01T09:00:00+09:00"));
  });

  test("20220401T123000Z", () => {
    const result = str2Date("20220401T123000Z");
    expect(result).toEqual(new Date("2022-04-01T12:30:00Z"));
  });

  test("2022-04-01T12:30:00Z", () => {
    const result = str2Date("2022-04-01T12:30:00Z");
    expect(result).toEqual(new Date("2022-04-01T12:30:00Z"));
  });
});

describe("getDateInfo", () => {
  test("1970-01-01T09:00:00+09:00", () => {
    const result = getDateInfo(new Date("1970-01-01T09:00:00+09:00"));
    expect(result).toEqual({
      year: 1970,
      month: 1,
      day: 1,
      hour: 9,
      minute: 0,
      second: 0,
      dayOfWeek: "Thu",
      strYear: "1970",
      strMonth: "01",
      strDay: "01",
      strHour: "09",
      strMinute: "00",
      strSecond: "00",
    });
  });

  test("2022-04-01T12:30:00Z", () => {
    const result = getDateInfo(new Date("2022-04-01T12:30:00Z"));
    expect(result).toEqual({
      year: 2022,
      month: 4,
      day: 1,
      hour: 21,
      minute: 30,
      second: 0,
      dayOfWeek: "Fri",
      strYear: "2022",
      strMonth: "04",
      strDay: "01",
      strHour: "21",
      strMinute: "30",
      strSecond: "00",
    });
  });
});

describe("getUNIXTime", () => {
  test("1970-01-01T09:00:00+09:00", () => {
    const result = getUNIXTime(new Date("1970-01-01T09:00:00+09:00"));
    expect(result).toBe(0);
  });

  test("2022-04-01T12:30:00Z", () => {
    const result = getUNIXTime(new Date("2022-04-01T12:30:00Z"));
    expect(result).toBe(1648816200);
  });
});

describe("getDateDiff", () => {
  test("2022-04-01T12:30:00Z - 1970-01-01T09:00:00+09:00", () => {
    const result = getDateDiff(
      new Date("1970-01-01T09:00:00+09:00"),
      new Date("2022-04-01T12:30:00Z"),
    );
    expect(result).toEqual({
      diff: 1648816200,
      second: 0,
      minute: 30,
      hour: 12,
      day: 19083,
    });
  });

  test("1970-01-01T09:00:00+09:00 - 2022-04-01T12:30:00Z", () => {
    const result = getDateDiff(
      new Date("2022-04-01T12:30:00Z"),
      new Date("1970-01-01T09:00:00+09:00"),
    );
    expect(result).toEqual({
      diff: 1648816200,
      second: 0,
      minute: 30,
      hour: 12,
      day: 19083,
    });
  });
});

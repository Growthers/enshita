import {expect, test} from "vitest";
import { zeroPadding, timeDiff } from "~/utils/time";
import dayjs from "dayjs";

describe("(function) time", () => {
  test("test zeroPadding", () => {
    expect(zeroPadding(1)).toBe("01");
  })

  test("test timeDiff", () => {
    expect(timeDiff(dayjs("2022/9/10 0:0:00"),dayjs("September 10, 2022 12:34:00"))).toStrictEqual({first:12,second:34})
  })
});

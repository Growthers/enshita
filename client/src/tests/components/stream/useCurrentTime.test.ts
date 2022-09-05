import { renderHook } from "@testing-library/react";
import useCurrentTime from "~/hooks/useCurrentTime";
import dayjs from "dayjs";

describe("(custom hook) useCurrentTime", () => {
  const { result } = renderHook(() => useCurrentTime());
  const time = dayjs();

  test("test now time", () => {
    expect(result.current.hour()).toBe(time.hour());
    expect(result.current.minute()).toBe(time.minute());
    expect(result.current.second()).toBe(time.second());
  });
});

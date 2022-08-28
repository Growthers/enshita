import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventDate from "~/components/event/date";

describe("(component) EventDate", () => {
  test("Snap Shot - 19:30 ~ 23:00", () => {
    const { container } = render(
      <EventDate
        startStrDate="2022-08-28T19:30:00+09:00"
        endStrDate="2022-08-28T23:00:00+09:00"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - 19:30 ~ Next Day 04:00 ", () => {
    const { container } = render(
      <EventDate
        startStrDate="2022-08-28T19:30:00+09:00"
        endStrDate="2022-08-29T04:00:00+09:00"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - 19:30 ~ Next Day 05:00", () => {
    const { container } = render(
      <EventDate
        startStrDate="2022-08-28T19:30:00+09:00"
        endStrDate="2022-08-29T05:00:00+09:00"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - No Date", () => {
    const { container } = render(<EventDate startStrDate="" endStrDate="" />);
    expect(container).toMatchSnapshot();
  });
});

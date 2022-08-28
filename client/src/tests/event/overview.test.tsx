import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventOverview from "~/components/event/overview";

describe("(component) EventOverview", () => {
  test("Snap Shot - preparing", () => {
    const { container } = render(
      <EventOverview
        eventId="123456789"
        startDate="2022-08-27T19:30:00+09:00"
        endDate="2022-08-27T23:00:00+09:00"
        status="preparing"
        deadline="2022-08-27T00:00:00+09:00"
        speakerQuotaTypeList={[
          {
            id: "123",
            name: "3分枠",
            time: 3,
            currentCount: 2,
            total: 5,
          },
          {
            id: "12345",
            name: "5分枠",
            time: 5,
            currentCount: 3,
            total: 5,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - open", () => {
    const { container } = render(
      <EventOverview
        eventId="123456789"
        startDate="2022-08-27T19:30:00+09:00"
        endDate="2022-08-27T23:00:00+09:00"
        venue="Discord"
        status="open"
        deadline="2022-08-27T00:00:00+09:00"
        speakerQuotaTypeList={[
          {
            id: "123",
            name: "3分枠",
            time: 3,
            currentCount: 2,
            total: 5,
          },
          {
            id: "12345",
            name: "5分枠",
            time: 5,
            currentCount: 3,
            total: 5,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - close", () => {
    const { container } = render(
      <EventOverview
        eventId="123456789"
        startDate="2022-08-27T19:30:00+09:00"
        endDate="2022-08-27T23:00:00+09:00"
        venue="Discord"
        status="close"
        deadline="2022-08-27T00:00:00+09:00"
        speakerQuotaTypeList={[
          {
            id: "123",
            name: "3分枠",
            time: 3,
            currentCount: 2,
            total: 5,
          },
          {
            id: "12345",
            name: "5分枠",
            time: 5,
            currentCount: 3,
            total: 5,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - suddenOpen", () => {
    const { container } = render(
      <EventOverview
        eventId="123456789"
        startDate="2022-08-27T19:30:00+09:00"
        endDate="2022-08-27T23:00:00+09:00"
        venue="Discord"
        status="suddenOpen"
        deadline="2022-08-27T00:00:00+09:00"
        speakerQuotaTypeList={[
          {
            id: "123",
            name: "3分枠",
            time: 3,
            currentCount: 2,
            total: 5,
          },
          {
            id: "12345",
            name: "5分枠",
            time: 5,
            currentCount: 3,
            total: 5,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - suddenClose", () => {
    const { container } = render(
      <EventOverview
        eventId="123456789"
        startDate="2022-08-27T19:30:00+09:00"
        endDate="2022-08-27T23:00:00+09:00"
        venue="Discord"
        status="suddenClose"
        deadline="2022-08-27T00:00:00+09:00"
        speakerQuotaTypeList={[
          {
            id: "123",
            name: "3分枠",
            time: 3,
            currentCount: 2,
            total: 5,
          },
          {
            id: "12345",
            name: "5分枠",
            time: 5,
            currentCount: 3,
            total: 5,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - finish", () => {
    const { container } = render(
      <EventOverview
        eventId="123456789"
        startDate="2022-08-27T19:30:00+09:00"
        endDate="2022-08-27T23:00:00+09:00"
        venue="Discord"
        status="finish"
        deadline="2022-08-27T00:00:00+09:00"
        speakerQuotaTypeList={[
          {
            id: "123",
            name: "3分枠",
            time: 3,
            currentCount: 2,
            total: 5,
          },
          {
            id: "12345",
            name: "5分枠",
            time: 5,
            currentCount: 3,
            total: 5,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventDescription from "~/components/event/description";

describe("(component) EventDescription", () => {
  test("Snap Shot - Simple Text", () => {
    const { container } = render(
      <EventDescription description="イベントの説明" />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain URL", () => {
    const { container } = render(
      <EventDescription description="URL: https://growthers.dev" />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain New Line and URL", () => {
    const { container } = render(
      <EventDescription description="イベントの説明\n\nURL↓\nhttps://growthers.dev" />,
    );
    expect(container).toMatchSnapshot();
  });
});

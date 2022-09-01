import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/event/date.stories";

const { Default, NextDay4, NextDay5, NoDate } = composeStories(stories);

describe("(component) EventDate", () => {
  test("Snap Shot - 19:30 ~ 23:00", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - 19:30 ~ Next Day 04:00 ", () => {
    const { container } = render(<NextDay4 />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - 19:30 ~ Next Day 05:00", () => {
    const { container } = render(<NextDay5 />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - No Date", () => {
    const { container } = render(<NoDate />);
    expect(container).toMatchSnapshot();
  });
});

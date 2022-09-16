import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/event-card/event-card.stories";

const { Default } = composeStories(stories);

describe("(components) event card", () => {
  test("take snapshot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

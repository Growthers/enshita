import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/button.stories";

const { Default } = composeStories(stories);

describe("(components) footer", () => {
  test("test Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

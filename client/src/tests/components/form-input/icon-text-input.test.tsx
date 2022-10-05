import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/form-input/icon-text-input.stories";

const { Default } = composeStories(stories);

describe("(component) text input module test", () => {
  test("Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

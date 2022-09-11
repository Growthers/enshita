import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/form-input/radio-input.stories";

const { Default } = composeStories(stories);

describe("(components) radio button input", () => {
  test("label should be test", () => {
    const { getByLabelText } = render(<Default />);
    expect(getByLabelText("test")).toBeInTheDocument();
  });
  test("(normal) take snapshot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

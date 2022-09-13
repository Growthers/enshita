import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/apply-form/radio.stories";

const { Default } = composeStories(stories);

describe("(components) radio input with using react-hook-form", () => {
  test("label should be label for radio", () => {
    const { getByLabelText } = render(<Default />);
    expect(getByLabelText("label for radio")).toBeInTheDocument();
  });
  test("take snapshot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

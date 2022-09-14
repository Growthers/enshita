import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/image-container/image-container.stories";

const { Default } = composeStories(stories);

const option = { name: "post new LT" };

describe("(components) image container for landing page", () => {
  test("to be [role=img]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("img", option)).toBeInTheDocument();
  });
  test("take snapshot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

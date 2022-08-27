import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/anchor-button.stories";

const { Default, Icon } = composeStories(stories);

describe("(components) anchor button", () => {
  const options = { name: "This is test" };
  test("[role=button]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("button", options)).toBeInTheDocument();
  });
  test("(normal) test Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("(icon) test Snap Shot", () => {
    const { container } = render(<Icon />);
    expect(container).toMatchSnapshot();
  });
});

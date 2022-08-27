import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "../stories/apply-form-title.stories";

const { Default } = composeStories(stories);

const options = {
  name: "共同開発鯖LT #4"
}

describe("(components) form-title", () => {
  test("to be [role=heading]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("heading", options));
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

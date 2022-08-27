import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/footer.stories";

const { Default } = composeStories(stories);

const navigationOptions = {
  name: "",
};
const linkOption = {
  name: "Twitter" || "GitHub" || "Home Page",
};

describe("(components) footer", () => {
  test("test Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("to be [role=navigation]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("navigation", navigationOptions)).toBeInTheDocument();
  });
  test("to be [role=link]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("link", linkOption)).toBeInTheDocument();
  });
});

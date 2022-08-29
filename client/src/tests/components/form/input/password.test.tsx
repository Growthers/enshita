import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/form/input/password.stories";

const { Default } = composeStories(stories);

describe("(component) password text area", () => {
  test("Snap Shot", () => {
    const { container } = render(
      <Default label="mail" discription="mail address" />,
    );
    expect(container).toMatchSnapshot();
  });
});

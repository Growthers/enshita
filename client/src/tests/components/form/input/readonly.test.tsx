import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/form/input/readonly.stories";

const { Default } = composeStories(stories);

describe("(component) normal text area", () => {
  test("Snap Shot", () => {
    const { container } = render(
      <Default label="mail" discription="mail address" icon="ci:mail" />,
    );
    expect(container).toMatchSnapshot();
  });
});

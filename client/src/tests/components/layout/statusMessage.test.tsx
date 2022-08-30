import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/layout/statusMessage.stories";

const { Default } = composeStories(stories);

describe("(components) header", () => {
  test("test Snap Shot", () => {
    const { container } = render(
      <Default code={404} message="page not found" />,
    );
    expect(container).toMatchSnapshot();
  });
});

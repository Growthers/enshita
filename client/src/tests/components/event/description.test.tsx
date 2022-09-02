import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/event/description.stories";

const { Default, SimpleText, URL } = composeStories(stories);

describe("(component) EventDescription", () => {
  test("Snap Shot - Simple Text", () => {
    const { container } = render(<SimpleText />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain URL", () => {
    const { container } = render(<URL />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain New Line and URL", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

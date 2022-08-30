import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/event/description.stories";

const { Default } = composeStories(stories);

describe("(component) EventDescription", () => {
  test("Snap Shot - Simple Text", () => {
    const { container } = render(<Default description="イベントの説明" />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain URL", () => {
    const { container } = render(
      <Default description="URL: https://growthers.dev" />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain New Line and URL", () => {
    const { container } = render(
      <Default description="イベントの説明\n\nURL↓\nhttps://growthers.dev" />,
    );
    expect(container).toMatchSnapshot();
  });
});

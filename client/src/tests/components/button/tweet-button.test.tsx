import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/button/tweet-button.stories";

const { Default, URL, Hashtags, Full } = composeStories(stories);

describe("(component) TweetButton", () => {
  test("Snap Shot - Only Text", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain URL", () => {
    const { container } = render(<URL />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain Hashtags", () => {
    const { container } = render(<Hashtags />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain Hashtags and URL", () => {
    const { container } = render(<Full />);
    expect(container).toMatchSnapshot();
  });
});

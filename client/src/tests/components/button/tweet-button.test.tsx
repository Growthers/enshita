import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/button/tweet-button.stories";

const { Default } = composeStories(stories);

describe("(component) TweetButton", () => {
  test("Snap Shot - Only Text", () => {
    const { container } = render(<Default text="Test Tweet Content" />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain URL", () => {
    const { container } = render(
      <Default text="Test Tweet Content" url="https://growthers.dev" />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain Hashtags", () => {
    const { container } = render(
      <Default text="Test Tweet Content" hashtags={["共同開発鯖"]} />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain Hashtags and URL", () => {
    const { container } = render(
      <Default
        text="Test Tweet Content"
        url="https://growthers.dev"
        hashtags={["共同開発鯖", "#共同開発鯖LT"]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

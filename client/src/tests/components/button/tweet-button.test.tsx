import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TweetButton from "~/components/button/tweet-button";

describe("(component) TweetButton", () => {
  test("Snap Shot - Only Text", () => {
    const { container } = render(<TweetButton text="Test Tweet Content" />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain URL", () => {
    const { container } = render(
      <TweetButton text="Test Tweet Content" url="https://growthers.dev" />,
    );
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - Contain Hashtags and URL", () => {
    const { container } = render(
      <TweetButton
        text="Test Tweet Content"
        url="https://growthers.dev"
        hashtags={["共同開発鯖", "#共同開発鯖LT"]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/form/accountInfoForm.stories";

const { Default } = composeStories(stories);

describe("(component) account information form", () => {
  test("Snap Shot", () => {
    const { container } = render(
      <Default mail="abc@example.com" userName="hoge" />,
    );
    expect(container).toMatchSnapshot();
  });
});

import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/account-info-form/icon-text-control.stories";

const { Default, Valid } = composeStories(stories);

describe("(component) text control module test", () => {
  test("(valid) input is correctly entered", async () => {
    const { container, getByLabelText } = render(<Valid />);
    await Valid.play({ canvasElement: container });
    const input = getByLabelText("email Address") as HTMLInputElement;
    expect(input.value).toEqual("fuga@hoge.com");
  });
  test("Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

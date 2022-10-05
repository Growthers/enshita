import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/account-info-form/password-control.stories";

const { Default, Valid } = composeStories(stories);

describe("(component) password control module test", () => {
  test("(valid) input is correctly entered", async () => {
    const { container, getByLabelText } = render(<Valid />);
    await Valid.play({ canvasElement: container });
    const input = getByLabelText("New Password") as HTMLInputElement;
    expect(input.value).toEqual("hogehoge");
  });
  test("Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

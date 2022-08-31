import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/apply-form/area.stories";

const { Default, Valid } = composeStories(stories);

describe("(components) text area input with using react-hook-form", () => {
  test("label should be paragraph", () => {
    const { getByLabelText } = render(<Default />);
    expect(getByLabelText("paragraph")).toBeInTheDocument();
  });
  test("(valid) input is correctly entered", async () => {
    const { container, getByLabelText } = render(<Valid />);
    await Valid.play({ canvasElement: container });
    const input = getByLabelText("paragraph") as HTMLInputElement;
    expect(input.value).toEqual("abcdefghij");
  });
  test("take snapshot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

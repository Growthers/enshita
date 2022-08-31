import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "../../../stories/apply-form/input.stories";

const { Default, Valid } = composeStories(stories);

describe("(components) text input with using react-hook-form", () => {
  test("label should be name in English", () => {
    const { getByLabelText } = render(<Default />);
    expect(getByLabelText("名前")).toBeInTheDocument();
  });
  test("placeholder should be name in English", () => {
    const { getByPlaceholderText } = render(<Default />);
    expect(getByPlaceholderText("名前")).toBeInTheDocument();
  });
  test("(valid) input is correctly entered", async () => {
    const { container, getByLabelText } = render(<Valid />);
    await Valid.play({ canvasElement: container });
    const input = getByLabelText("名前") as HTMLInputElement;
    expect(input.value).toEqual("Rintaro Itokawa");
  });
  test("test Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});

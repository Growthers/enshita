import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/form-input/area-input.stories";

const { Default, Error, InputFieldFilled } = composeStories(stories);

describe("(components) text area input", () => {
  test("label should be test", () => {
    const { getByLabelText } = render(<Default />);
    expect(getByLabelText("test")).toBeInTheDocument();
  });
  test("input is correctly entered", async () => {
    const { container, getByLabelText } = render(<InputFieldFilled />);
    await InputFieldFilled.play({ canvasElement: container });
    const input = getByLabelText("test") as HTMLInputElement;
    expect(input.value).toEqual("This is test.");
  });
  test("error message is exist", () => {
    const { getByLabelText } = render(<Error />);
    expect(getByLabelText("error message")).toBeInTheDocument();
  });
  test("(normal) take snapshot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("(error) take snapshot", () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});

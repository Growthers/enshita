import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/event-card/chip.stories";

const { Default, Open, Close, SuddenOpen, SuddenClose, Finish } =
  composeStories(stories);

describe("(components) event card chip", () => {
  test("(normal) take snapshot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("(open) take snapshot", () => {
    const { container } = render(<Open />);
    expect(container).toMatchSnapshot();
  });
  test("(close) take snapshot", () => {
    const { container } = render(<Close />);
    expect(container).toMatchSnapshot();
  });
  test("(sudden open) take snapshot", () => {
    const { container } = render(<SuddenOpen />);
    expect(container).toMatchSnapshot();
  });
  test("(sudden close) take snapshot", () => {
    const { container } = render(<SuddenClose />);
    expect(container).toMatchSnapshot();
  });
  test("(finish) take snapshot", () => {
    const { container } = render(<Finish />);
    expect(container).toMatchSnapshot();
  });
});

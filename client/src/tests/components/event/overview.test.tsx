import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/event/overview.stories";

const { Preparing, Open, Close, SuddenOpen, SuddenClose, Finish } =
  composeStories(stories);

describe("(component) EventOverview", () => {
  test("Snap Shot - preparing", () => {
    const { container } = render(<Preparing />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - open", () => {
    const { container } = render(<Open />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - close", () => {
    const { container } = render(<Close />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - suddenOpen", () => {
    const { container } = render(<SuddenOpen />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - suddenClose", () => {
    const { container } = render(<SuddenClose />);
    expect(container).toMatchSnapshot();
  });

  test("Snap Shot - finish", () => {
    const { container } = render(<Finish />);
    expect(container).toMatchSnapshot();
  });
});

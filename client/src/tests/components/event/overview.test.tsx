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

  test("Button is Disabled - preparing", () => {
    const { getByRole } = render(<Preparing />);
    expect(getByRole("button", { name: "申し込み開始前" })).toBeDisabled();
  });

  test("Button is Enabled - open", () => {
    const { getByRole } = render(<Open />);
    expect(getByRole("button", { name: "申し込む" })).toBeEnabled();
  });

  test("Button is Disabled - close", () => {
    const { getByRole } = render(<Close />);
    expect(
      getByRole("button", { name: "申し込みは終了しました" }),
    ).toBeDisabled();
  });

  test("Button is Enabled - suddenOpen", () => {
    const { getByRole } = render(<SuddenOpen />);
    expect(getByRole("button", { name: "飛び入りで申し込む" })).toBeEnabled();
  });

  test("Button is Disabled - suddenClose", () => {
    const { getByRole } = render(<SuddenClose />);
    expect(
      getByRole("button", { name: "申し込みは終了しました" }),
    ).toBeDisabled();
  });

  test("Button is Disabled - finish", () => {
    const { getByRole } = render(<Finish />);
    expect(
      getByRole("button", { name: "イベントは終了しました" }),
    ).toBeDisabled();
  });
});

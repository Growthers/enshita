import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { AreaInput } from "~/components/form-input/area-input";
// eslint-disable-next-line import/no-extraneous-dependencies
import {userEvent, within} from "@storybook/testing-library";

type T = typeof AreaInput;
type Story = ComponentStoryObj<T>;

export default {
  args: { id: "test", "aria-label": "test" },
  component: AreaInput,
} as ComponentMeta<T>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: {
      type: "maxLength",
      message: "1000字以内で入力してください"
    }
  }
}

export const InputFieldFilled: Story = {
  play: async({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("test"), "This is test.")
  }
}

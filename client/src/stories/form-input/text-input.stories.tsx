import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TextInput } from "~/components/form-element/text-input";
import { userEvent, within } from "@storybook/testing-library";

type T = typeof TextInput;
type Story = ComponentStoryObj<T>;

export default {
  args: { placeholder: "test", id: "test", "aria-label": "test", type: "text" },
  component: TextInput,
} as ComponentMeta<T>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: {
      type: "required",
      message: "test error",
    },
  },
};

export const InputFieldFilled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("test"), "This is test.");
  },
};

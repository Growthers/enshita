import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { RadioInput } from "~/components/form-input/radio-input";

type T = typeof RadioInput;
type Story = ComponentStoryObj<T>;

export default {
  args: { id: "test", value: "test", name: "Test", current: "2", total: "5", "aria-label": "test" },
  component: RadioInput,
} as ComponentMeta<T>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: {
      type: "required",
      message: "選択する必要があります"
    }
  }
}

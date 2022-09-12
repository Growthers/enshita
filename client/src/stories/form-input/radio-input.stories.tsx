import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { RadioInput } from "~/components/form-element/radio-input";

type T = typeof RadioInput;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    id: "test",
    value: "test",
    "aria-label": "test",
  },
  component: RadioInput,
} as ComponentMeta<T>;

export const Default: Story = {};

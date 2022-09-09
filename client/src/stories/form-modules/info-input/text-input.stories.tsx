// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TextInput } from "~/components/form-modules/info-input/text-input";

type T = typeof TextInput;
type Story = ComponentStoryObj<T>;

export default {
  component: TextInput,
  args: {
    icon: "ci:mail",
  },
} as ComponentMeta<T>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: {
      type: "min",
      message: "test error",
    },
  },
};

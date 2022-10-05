// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { PasswordInput } from "~/components/form-element/password-input";

type T = typeof PasswordInput;
type Story = ComponentStoryObj<T>;

export default {
  component: PasswordInput,
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

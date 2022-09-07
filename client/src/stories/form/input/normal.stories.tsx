// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Normal from "~/components/account-info-form/input/textArea";

type T = typeof Normal;
type Story = ComponentStoryObj<T>;

export default {
  component: Normal,
  args: {
    label: "mail",
    discription: "mail",
    icon: "ci:mail",
  },
} as ComponentMeta<T>;

export const Default: Story = {};

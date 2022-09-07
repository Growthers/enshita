// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Password from "~/components/account-info-form/input/passwordArea";

type T = typeof Password;
type Story = ComponentStoryObj<T>;

export default {
  component: Password,
  args: {
    label: "mail",
    discription: "mail",
  },
} as ComponentMeta<T>;

export const Default: Story = {};

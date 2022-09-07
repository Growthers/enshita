// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Readonly from "~/components/account-info-form/input/readonlyArea";

type T = typeof Readonly;
type Story = ComponentStoryObj<T>;

export default {
  component: Readonly,
  args: {
    label: "mail",
    discription: "mail",
    icon: "ci:mail",
  },
} as ComponentMeta<T>;

export const Default: Story = {};

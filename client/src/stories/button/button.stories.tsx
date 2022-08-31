import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "~/components/button/button";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "This is test",
};

export default {
  args: {
    children: data.sentence,
    type: "button",
    disabled: false,
    variant: "normal",
  },
  component: Button,
} as ComponentMeta<T>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    icon: "akar-icons:twitter-fill",
  },
};

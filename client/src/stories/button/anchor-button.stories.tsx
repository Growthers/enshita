import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { AnchorButton } from "~/components/button/anchor-button";

type T = typeof AnchorButton;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "This is test",
  link: "#",
};

export default {
  args: { children: data.sentence, variant: "normal", href: data.link },
  component: AnchorButton,
} as ComponentMeta<T>;

export const Default: Story = {};

export const Icon: Story = {
  args: {
    variant: "icon",
    icon: "akar-icons:twitter-fill",
  },
};

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import ImageContainer from "~/components/image-container";

type T = typeof ImageContainer;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    alt: "post new LT",
    children: "簡単にLTを\n開催できる.",
    src: "/statics/undraw_post_re_mtr4.svg"
  },
  component: ImageContainer,
} as ComponentMeta<T>;

export const Default: Story = {};

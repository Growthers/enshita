// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Oped from "~/components/stream/oped";

type T = typeof Oped;
type Story = ComponentStoryObj<T>;

export default {
  component: Oped,
} as ComponentMeta<T>;

export const Opening: Story = {
  args: {
    message: "オープニングみたいなメッセージを設定可能",
    subMessage: "ここにもメッセージ",
  },
};

export const Ending: Story = {
  args: {
    message: "エンディングみたいなメッセージを設定可能",
    subMessage: "ここにもメッセージ",
  },
};

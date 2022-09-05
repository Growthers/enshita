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
    massage: "オープニングみたいなメッセージを設定可能",
    subMassage: "ここにもメッセージ",
  },
};

export const Ending: Story = {
  args: {
    massage: "エンディングみたいなメッセージを設定可能",
    subMassage: "ここにもメッセージ",
  },
};

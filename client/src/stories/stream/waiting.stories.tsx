// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Waiting from "~/components/stream/waiting";

type T = typeof Waiting;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    RemainingTime: {
      first: 2,
      second: 15,
    },
    title: "ここにタイトルが入ります",
    subtitle: "ここにメッセージを設定可能",
    massage: "しばらくお待ちください",
  },
  component: Waiting,
} as ComponentMeta<T>;

export const Default: Story = {};

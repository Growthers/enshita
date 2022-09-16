// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Clock from "~/components/stream/clock";

type T = typeof Clock;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    time: {
      first: 1,
      second: 1,
    },
  },
  component: Clock,
} as ComponentMeta<T>;

export const Default: Story = {};

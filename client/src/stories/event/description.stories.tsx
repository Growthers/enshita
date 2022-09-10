import type{ ComponentMeta, ComponentStoryObj } from "@storybook/react";
import EventDescription from "~/components/event/description";

type T = typeof EventDescription;
type Story = ComponentStoryObj<T>;

const data = {
  description: "イベントの説明\n\nURL↓\nhttps://growthers.dev",
};

export default {
  component: EventDescription,
  args: { description: data.description },
  argTypes: {
    description: {
      description: "イベント説明",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<T>;

export const Default: Story = {};

export const SimpleText: Story = {
  args: {
    description: "イベントの説明",
  },
};

export const URL: Story = {
  args: {
    description: "URL: https://growthers.dev",
  },
};

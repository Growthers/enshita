// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import EventDescription from "~/components/event/description";

type T = typeof EventDescription;
type Story = ComponentStoryObj<T>;

const data = {
  description:
    "イベントの説明です\n\nhttps://twitter.com\nこのようにURLがあるときはリンクに変換されます",
};

export default {
  component: EventDescription,
  args: { description: data.description },
} as ComponentMeta<T>;

export const Default: Story = {};

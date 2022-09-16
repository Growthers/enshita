// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Comment from "~/components/stream/comment";

type T = typeof Comment;
type Story = ComponentStoryObj<T>;

export default {
  component: Comment,
  args: {
    comment: {
      platform: "twitter",
      name: "a",
      iconUrl: "a",
      content:
        "a",
    }
  },
} as ComponentMeta<T>;

export const Default: Story = {};

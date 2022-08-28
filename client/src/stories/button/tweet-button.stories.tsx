// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import TweetButton from "~/components/button/tweet-button";

type T = typeof TweetButton;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    text: "Tweet Content",
    url: "https://growthers.dev",
    hashtags: ["共同開発鯖", "#共同開発鯖LT"],
  },
  component: TweetButton,
} as ComponentMeta<T>;

export const Default: Story = {};

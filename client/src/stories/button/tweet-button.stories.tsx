// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import TweetButton from "~/components/button/tweet-button";

type T = typeof TweetButton;
type Story = ComponentStoryObj<T>;

export default {
  component: TweetButton,
  args: {
    text: "Tweet Content",
    url: "",
    hashtags: [],
  },
  argTypes: {
    text: {
      description: "Tweetテキスト",
      controle: {
        type: "text",
      },
    },
    url: {
      description: "Tweetに含めるURL",
      controle: {
        type: "text",
      },
    },
    hashtags: {
      description: "Tweetに含めるハッシュタグ",
      controle: {
        type: "object",
      },
    },
  },
} as ComponentMeta<T>;

export const Default: Story = {};

export const URL: Story = {
  args: {
    url: "https://growthers.dev",
  },
};

export const Hashtags: Story = {
  args: {
    hashtags: ["共同開発鯖", "#共同開発鯖LT"],
  },
};

export const Full: Story = {
  args: {
    url: "https://growthers.dev",
    hashtags: ["共同開発鯖", "#共同開発鯖LT"],
  },
};

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventDescription from "~/components/event/description";

type T = typeof EventDescription;

export default {
  component: EventDescription,
  argTypes: {
    description: {
      description: "イベント説明",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<T>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<T> = args => <EventDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
  description:
    "イベントの説明です\n\nhttps://twitter.com\nこのようにURLがあるときはリンクに変換されます",
};

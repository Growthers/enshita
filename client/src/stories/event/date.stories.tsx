// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventDate from "~/components/event/date";

type T = typeof EventDate;

export default {
  component: EventDate,
  argTypes: {
    startStrDate: {
      description: "イベント開始日時 (ISO8601)",
      control: {
        type: "text",
      },
    },
    endStrDate: {
      description: "イベント終了日時 (ISO8601)",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<T>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<T> = args => <EventDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  startStrDate: "2022-08-27T19:30:00+09:00",
  endStrDate: "2022-08-27T23:00:00+09:00",
};

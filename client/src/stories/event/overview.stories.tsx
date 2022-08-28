// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventOverview from "~/components/event/overview";

type T = typeof EventOverview;

export default {
  component: EventOverview,
  argTypes: {
    eventId: {
      description: "イベントID",
      control: {
        type: "text",
      },
    },
    startDate: {
      description: "イベント開始日時 (ISO8601)",
      control: {
        type: "text",
      },
    },
    endDate: {
      description: "イベント終了日時 (ISO8601)",
      control: {
        type: "text",
      },
    },
    venue: {
      description: "開催場所",
      control: {
        type: "text",
      },
    },
    status: {
      description: "イベントステータス",
      control: {
        type: "select",
        options: [
          "preparing",
          "open",
          "close",
          "suddenOpen",
          "suddenClose",
          "finish",
        ],
      },
    },
    deadline: {
      description: "フォーム締め切り日時 (ISO8601)",
      control: {
        type: "text",
      },
    },
    speakerQuotaTypeList: {
      description: "登壇枠",
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<T>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<T> = args => <EventOverview {...args} />;

export const Default = Template.bind({});
Default.args = {
  eventId: "123456789",
  startDate: "2022-08-27T19:30:00+09:00",
  endDate: "2022-08-27T23:00:00+09:00",
  venue: "Discord",
  status: "open",
  deadline: "2022-08-27T00:00:00+09:00",
  speakerQuotaTypeList: [
    {
      id: "123",
      name: "3分枠",
      time: 3,
      currentCount: 2,
      total: 5,
    },
    {
      id: "12345",
      name: "5分枠",
      time: 5,
      currentCount: 3,
      total: 5,
    },
  ],
};

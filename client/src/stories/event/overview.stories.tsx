// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import EventOverview from "~/components/event/overview";

type T = typeof EventOverview;
type Story = ComponentStoryObj<T>;

const data = {
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

export default {
  component: EventOverview,
  args: data,
} as ComponentMeta<T>;

export const Default: Story = {};

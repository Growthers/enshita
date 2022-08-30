// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import EventDate from "~/components/event/date";

type T = typeof EventDate;
type Story = ComponentStoryObj<T>;

const data = {
  startStrDate: "2022-08-27T19:30:00+09:00",
  endStrDate: "2022-08-27T23:00:00+09:00",
};

export default {
  component: EventDate,
  args: { startStrDate: data.startStrDate, endStrDate: data.endStrDate },
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

export const Default: Story = {};

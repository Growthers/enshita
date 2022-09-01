// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import EventDate from "~/components/event/date";

type T = typeof EventDate;
type Story = ComponentStoryObj<T>;

const data = {
  startStrDate: "2022-08-28T19:30:00+09:00",
  endStrDate: "2022-08-28T23:00:00+09:00",
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

export const NextDay4: Story = {
  args: {
    startStrDate: "2022-08-28T19:30:00+09:00",
    endStrDate: "2022-08-29T04:00:00+09:00",
  },
};

export const NextDay5: Story = {
  args: {
    startStrDate: "2022-08-28T19:30:00+09:00",
    endStrDate: "2022-08-29T05:00:00+09:00",
  },
};

export const NoDate: Story = {
  args: {
    startStrDate: "",
    endStrDate: "",
  },
};

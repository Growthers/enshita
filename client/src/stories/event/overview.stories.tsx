import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import EventOverview from "~/components/event/overview";

type T = typeof EventOverview;
type Story = ComponentStoryObj<T>;

const data = {
  eventId: "123456789",
  startDate: "2022-08-27T19:30:00+09:00",
  endDate: "2022-08-27T23:00:00+09:00",
  venue: "",
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
  },
} as ComponentMeta<T>;

export const Default: Story = {};

export const Venue: Story = {
  args: {
    venue: "Discord",
  },
};

export const Preparing: Story = {
  args: {
    status: "preparing",
  },
};

export const Open: Story = {
  args: {
    status: "open",
    venue: "Discord",
  },
};

export const Close: Story = {
  args: {
    status: "close",
    venue: "Discord",
  },
};

export const SuddenOpen: Story = {
  args: {
    status: "suddenOpen",
    venue: "Discord",
  },
};

export const SuddenClose: Story = {
  args: {
    status: "suddenClose",
    venue: "Discord",
  },
};

export const Finish: Story = {
  args: {
    status: "finish",
    venue: "Discord",
  },
};

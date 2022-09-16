import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import EventCard from "~/components/event-card";

type T = typeof EventCard
type Story = ComponentStoryObj<T>

export default {
  args: {
    eventId: "test",
    title: "This is test",
    startDate: "2022-08-27T19300009",
    ogp: "https://ogp.re-taro.dev/api/ogp?title=This%20is%20test",
    status: "open",
    hashTag: "test",
    speakerQuotaTypeList: [{"id":"02GA1BSFZQVZJS5PBADGF8X98E","name":"3分枠","time":3,"currentCount":2,"total":5},{"id":"03GA1BSFZQVZJS5PBADGF8X98E","name":"5分枠","time":5,"currentCount":3,"total":5}]
  }, component: EventCard
} as ComponentMeta<T>

export const Default: Story = {}

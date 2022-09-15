import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Chip } from "~/components/event-card/chip";

type T = typeof Chip
type Story = ComponentStoryObj<T>

export default {
  args: {
    status: "preparing"
  }, component: Chip
} as ComponentMeta<T>

export const Defalut: Story = {}
export const Open: Story = {
  args: {
    status: "open"
  }
}
export const Close: Story = {
  args: {
    status: "close"
  }
}
export const SuddenOpen: Story = {
  args: {
    status: "suddenOpen"
  }
}
export const SuddenClose: Story = {
  args: {
    status: "suddenClose"
  }
}
export const Finish: Story = {
  args: {
    status: "finish"
  }
}

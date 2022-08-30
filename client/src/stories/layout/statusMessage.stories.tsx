// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import StatusMessage from "~/components/layout/statusMessage";

type T = typeof StatusMessage;
type Story = ComponentStoryObj<T>;

export default {
  component: StatusMessage,
  args: {
    code: 404,
    message: "page not found",
  },
} as ComponentMeta<T>;

export const Default: Story = {};

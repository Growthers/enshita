import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import StatusMessage from "~/components/status-message";

type T = typeof StatusMessage;
type Story = ComponentStoryObj<T>;

export default {
  component: StatusMessage,
  args: {
    code: 404,
    message: "page not found",
    children: (
      <p>
        Oh... This URL is wrong.
        <br />
        please check again page URL.
      </p>
    ),
  },
} as ComponentMeta<T>;

export const Default: Story = {};

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Header from "~/components/layout/header";

type T = typeof Header;
type Story = ComponentStoryObj<T>;

export default {
  component: Header,
} as ComponentMeta<T>;

export const Default: Story = {};

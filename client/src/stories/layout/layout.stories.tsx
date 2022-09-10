import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Layout from "~/components/layout/layout";
import React from "react";

type T = typeof Layout;
type Story = ComponentStoryObj<T>;

const data = {
  node: <div>hogehoge</div>,
};

export default {
  args: { children: data.node },
  component: Layout,
} as ComponentMeta<T>;

export const Default: Story = {};

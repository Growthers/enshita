import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Layout from "~/components/layout";

type T = typeof Layout;
type Story = ComponentStory<T>;

export default {
  title: "Layout",
  args: { children: <div>hogehoge</div> },
  component: Layout,
} as ComponentMeta<T>;

export const Default: Story = {};

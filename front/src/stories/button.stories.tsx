import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Button from "~/components/button";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

export default {
  title: "Button",
  args: { children: <div>hogehoge</div> },
  component: Button,
} as ComponentMeta<T>;

export const Default: Story = {};

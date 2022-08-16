import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "~/components/header";

type T = typeof Header;
type Story = ComponentStory<T>;

export default {
  title: "Header",

  component: Header,
} as ComponentMeta<T>;

export const Default: Story = {};

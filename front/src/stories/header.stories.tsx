// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Header from "~/components/header";

type T = typeof Header;
type Story = ComponentStoryObj<T>;


export default {
  title: "Header",

  component: Header,
} as ComponentMeta<T>;

export const Default: Story = {};


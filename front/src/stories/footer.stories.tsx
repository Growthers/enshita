import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Footer from "~/components/footer";

type T = typeof Footer;
type Story = ComponentStoryObj<T>;

export default {
  title: "Footer",

  component: Footer,
} as ComponentMeta<T>;

export const Default: Story = {};

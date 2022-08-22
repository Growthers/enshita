// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import LoginForm from "~/components/loginForm";

type T = typeof LoginForm;
type Story = ComponentStoryObj<T>;

export default {
  title: "LoginForm",
  component: LoginForm,
} as ComponentMeta<T>;

export const Default: Story = {};

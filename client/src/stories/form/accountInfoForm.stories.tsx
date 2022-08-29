// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Form from "~/components/form/accountInfoForm";

type T = typeof Form;
type Story = ComponentStoryObj<T>;

export default {
  title: "account-information-form",
  args: {
    mail: "abc@example.com",
    userName: "hoge",
  },
  component: Form,
} as ComponentMeta<T>;

export const Default: Story = {};

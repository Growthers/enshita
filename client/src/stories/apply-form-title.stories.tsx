import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Title } from "~/components/apply-form/title";

type T = typeof Title;
type Story = ComponentStoryObj<T>;

const data = {
  title: "共同開発鯖LT #4",
};

export default { args: { title: data.title }, component: Title } as ComponentMeta<T>;

export const Default: Story = {};

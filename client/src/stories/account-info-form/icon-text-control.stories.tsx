// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AccountInfoFormFieldValues } from "~/pages/account/info/type/model";
import { accountInfoFormSchema } from "~/pages/account/info/type/schema";
import { TextControl } from "~/components/account-info-form/icon-text-control";
import { userEvent, within } from "@storybook/testing-library";

type T = typeof TextControl;
type Story = ComponentStoryObj<T>;

export default {
  component: TextControl,
  args: {
    name: "mail",
    icon: "ci:mail",
    label: "email Address",
  },
  decorators: [
    Story => {
      const methods = useForm<AccountInfoFormFieldValues>({
        resolver: zodResolver(accountInfoFormSchema),
        defaultValues: {
          mail: "",
        },
        mode: "onBlur",
      });
      const handleSubmit = methods.handleSubmit(data => {
        // eslint-disable-next-line no-console
        console.log(data);
      });

      return (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            <Story />
          </form>
        </FormProvider>
      );
    },
  ],
} as ComponentMeta<T>;

const type = async (step: 0 | 1 | 2, canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  if (step === 0) return;
  await userEvent.type(canvas.getByLabelText("email Address"), "fuga@hoge.com");
  if (step === 1) return;
  await userEvent.clear(canvas.getByLabelText("email Address"));
};

const playFactory = async (step: 0 | 1 | 2, canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  await type(step, canvasElement);
  canvas.getByLabelText("email Address").blur();
};

export const Default: Story = {};

export const Nothing: Story = {
  play: async ({ canvasElement }) => {
    await playFactory(0, canvasElement);
  },
};

export const Valid: Story = {
  play: async ({ canvasElement }) => {
    await playFactory(1, canvasElement);
  },
};

export const Invalid: Story = {
  play: async ({ canvasElement }) => {
    await playFactory(2, canvasElement);
  },
};

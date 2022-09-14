// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AccountInfoFormFieldValues } from "~/components/account-info-form/type/model";
import { accountInfoFormSchema } from "~/components/account-info-form/type/schema";
import { TextControl } from "~/components/account-info-form/icon-text-control";

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
          mail: "fuga@hoge.com",
          userName: "hogefuga",
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

export const Default: Story = {};

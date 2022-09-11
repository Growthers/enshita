import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { AreaControl } from "~/components/apply-form/area-control";
import { useDefaultForm } from "~/hooks/useDefaultForm";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { within, userEvent } from "@storybook/testing-library";

type Form = {
  paragraph: string;
};
type T = typeof AreaControl<Form>;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    name: "paragraph",
    label: "自由記載欄",
    id: "paragraph",
  },
  component: AreaControl,
  decorators: [
    Story => {
      const schema = z.object({
        paragraph: z.nullable(
          z.string().max(10, { message: "10字以内で入力してください" }),
        ),
      });
      const methods = useDefaultForm<Form>({
        defaultValues: { paragraph: "" },
        mode: "onBlur",
        resolver: zodResolver(schema),
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
  await userEvent.type(canvas.getByLabelText("paragraph"), "abcdefghij");
  if (step === 1) return;
  await userEvent.type(canvas.getByLabelText("paragraph"), "k");
};

const playFactory = async (step: 0 | 1 | 2, canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  await type(step, canvasElement);
  canvas.getByLabelText("paragraph").blur();
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

import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { InputControl } from "~/components/apply-form/input-control";
import { useDefaultForm } from "~/hooks/useDefaultForm";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { within, userEvent } from "@storybook/testing-library";

type Form = {
  name: string;
};
type T = typeof InputControl<Form>;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    name: "name",
    label: "名前",
    id: "name",
    placeholder: "名前",
    description: "名前を入力してください",
  },
  component: InputControl,
  decorators: [
    Story => {
      const schema = z.object({
        name: z.string().min(1, { message: "名前は必須入力です。" }),
      });
      const methods = useDefaultForm<Form>({
        defaultValues: { name: "" },
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
  await userEvent.type(canvas.getByLabelText("名前"), "Rintaro Itokawa");
  if (step === 1) return;
  await userEvent.clear(canvas.getByLabelText("名前"));
};

const playFactory = async (step: 0 | 1 | 2, canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  await type(step, canvasElement);
  canvas.getByLabelText("名前").blur();
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

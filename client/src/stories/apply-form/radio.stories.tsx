import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { RadioControl } from "~/components/apply-form/radio-control";
import { useDefaultForm } from "~/hooks/useDefaultForm";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SpeakerQuotaType } from "~/types/global-models";
// eslint-disable-next-line import/no-extraneous-dependencies
import {userEvent, within} from "@storybook/testing-library";

type Form = {
  id: string;
};
type T = typeof RadioControl<Form>;
type Story = ComponentStoryObj<T>;

const items: Array<SpeakerQuotaType> = [
  {
    id: "1",
    name: "5分枠",
    time: 5,
    currentCount: 2,
    total: 6,
  },
  {
    id: "2",
    name: "7分枠",
    time: 7,
    currentCount: 0,
    total: 4,
  },
  {
    id: "3",
    name: "10分枠",
    time: 10,
    currentCount: 3,
    total: 4,
  },
];

export default {
  args: {
    label: "登壇枠",
    name: "id",
    items,
  },
  component: RadioControl,
  decorators: [
    Story => {
      const schema = z.object({
        id: z.string().min(1, { message: "選択肢を選んでください" }),
      });
      const methods = useDefaultForm<Form>({
        defaultValues: { id: "" },
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
            <button aria-label="submit" type="submit">テスト用</button>
          </form>
        </FormProvider>
      );
    },
  ],
} as ComponentMeta<T>;

const type = async (step: 0 | 1 | 2, canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  if (step === 0) return;
  await userEvent.click(canvas.getByLabelText("submit"))
  if(step===1) return;
  await userEvent.click(canvas.getByLabelText("2"));
};

const playFactory = async (step: 0 | 1 | 2, canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  await type(step, canvasElement);
  await userEvent.click(canvas.getByLabelText("submit"))
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

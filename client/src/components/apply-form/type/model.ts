import type {
  ControllerRenderProps,
  DeepPartial,
  FieldValues,
} from "react-hook-form";
import type { ComponentProps, ReactNode } from "react";
import type { FieldByType } from "~/libs/rhf";
import { TextInput } from "~/components/input/text-input";

export type TitleProperties = {
  title: string;
};

export type WrapperProperties<T extends FieldValues = never> = {
  defaultValues: (DeepPartial<T> | undefined) & T;
  children: ReactNode;
};

export type InputControlProperties<T extends FieldValues> = Omit<
  ComponentProps<typeof TextInput>,
  "error" | "inputStyles" | keyof ControllerRenderProps
> & {
  label: string;
  description?: string;
  name: FieldByType<T, string>;
};

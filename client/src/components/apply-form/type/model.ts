import type {
  ControllerRenderProps,
  DeepPartial,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import type { ComponentProps, ReactNode } from "react";
import type { FieldByType } from "~/libs/rhf";
import { TextInput } from "~/components/form-input/text-input";
import { AreaInput } from "~/components/form-input/area-input";
import { RadioInput } from "~/components/form-input/radio-input";
import type { SpeakerQuotaType } from "~/types/global-models";

export type TitleProperties = {
  title: string;
};

export type WrapperProperties<T extends FieldValues = never> = {
  defaultValues: (DeepPartial<T> | undefined) & T;
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
  wrapperStyle?: string;
};

export type InputControlProperties<T extends FieldValues> = Omit<
  ComponentProps<typeof TextInput>,
  "error" | "inputStyles" | keyof ControllerRenderProps
> & {
  label: string;
  description?: string;
  name: FieldByType<T, string>;
};

export type AreaControlProperties<T extends FieldValues> = Omit<
  ComponentProps<typeof AreaInput>,
  "error" | "inputStyles" | keyof ControllerRenderProps
> & {
  label: string;
  name: FieldByType<T, string>;
};

export type RadioControlProperties<T extends FieldValues> = Omit<
  ComponentProps<typeof RadioInput>,
  "id" | "current" | "total" | keyof ControllerRenderProps
> & {
  label: string;
  name: FieldByType<T, string>;
  items: Array<SpeakerQuotaType>;
};

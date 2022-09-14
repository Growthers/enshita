import type { ControllerRenderProps, FieldValues } from "react-hook-form";
import type { ComponentProps } from "react";
import type { FieldByType } from "~/libs/rhf";
import { TextInput } from "~/components/form-element/text-input";
import { AreaInput } from "~/components/form-element/area-input";
import { RadioInput } from "~/components/form-element/radio-input";
import type { SpeakerQuotaType } from "~/types/global-models";

export type TitleProperties = {
  title: string;
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

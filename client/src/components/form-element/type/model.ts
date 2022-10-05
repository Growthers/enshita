import { IconifyIcon } from "@iconify/react";
import type { ComponentProps, ReactNode } from "react";
import type {
  FieldError,
  DeepPartial,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import type { z } from "zod";

export type TextInputProperties = ComponentProps<"input"> & {
  inputStyles?: string;
  error?: FieldError;
};

export type AreaInputProperties = ComponentProps<"textarea"> & {
  inputStyles?: string;
  error?: FieldError;
};

export type WrapperProperties<T extends FieldValues = never> = {
  defaultValues: (DeepPartial<T> | undefined) & T;
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
  schema: z.Schema;
  wrapperStyle?: string;
};

export type RadioInputProperties = Omit<
  ComponentProps<"input">,
  "id" | "type"
> & {
  id: string;
  value: string;
};

export type IconTextInputProperties = TextInputProperties & {
  icon: string | IconifyIcon;
};

export type PasswordInputProps = Omit<IconTextInputProperties, "icon">;

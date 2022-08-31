import type { ComponentProps } from "react";
import type { FieldError } from "react-hook-form";

export type TextInputProperties = ComponentProps<"input"> & {
  inputStyles?: string;
  error?: FieldError;
};

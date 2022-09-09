import type { ComponentProps } from "react";
import type { FieldError } from "react-hook-form";

export type TextInputProps = ComponentProps<"input"> & {
  error?: FieldError;
  inputStyle?: string;
  icon: string;
};

export type PasswordInputProps = Omit<TextInputProps, "icon">;

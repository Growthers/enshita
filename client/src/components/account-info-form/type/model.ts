import type { ComponentProps } from "react";
import { TextInput } from "~/components/form-element/icon-text-input";
import { PasswordInput } from "~/components/form-element/password-input";
import type { FieldByType } from "~/libs/rhf";
import type { FieldValues } from "react-hook-form";

export type TextControlProps<T extends FieldValues = never> = Omit<
  ComponentProps<typeof TextInput>,
  "error" | "inputStyle"
> & {
  name: FieldByType<T, string>;
  label: string;
};

export type PasswordControlProps<T extends FieldValues = never> = Omit<
  ComponentProps<typeof PasswordInput>,
  "error" | "inputStyle"
> & {
  name: FieldByType<T, string>;
  label: string;
};

import type { ComponentProps } from "react";
import { TextInput } from "~/components/form-modules/info-input/text-input";
import { PasswordInput } from "~/components/form-modules/info-input/password-input";

export type TextControlProps = Omit<
  ComponentProps<typeof TextInput>,
  "error" | "inputStyle"
> & {
  name: string;
  label: string;
};

export type PasswordControlProps = Omit<
  ComponentProps<typeof PasswordInput>,
  "error" | "inputStyle"
> & {
  name: string;
  label: string;
};

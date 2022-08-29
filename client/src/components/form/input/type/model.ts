import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type NormalProps<T extends string> = {
  label: string;
  discription: string;
  icon: string;
  register: UseFormRegisterReturn<T>;
  itsError: FieldError | undefined;
};

export type PasswordProps<T extends string> = Omit<NormalProps<T>, "icon">;

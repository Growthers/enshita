import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type NormalProps= {
  label: string;
  discription: string;
  icon: string;
  register: UseFormRegisterReturn<string>;
  itsError: FieldError | undefined;
};

export type PasswordProps = Omit<NormalProps, "icon">;

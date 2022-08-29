import type { FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";

const useDefaultForm = <T extends FieldValues>(
  props: UseFormProps<T> & {
    defaultValues: T;
  },
): UseFormReturn<T> => useForm(props);

export { useDefaultForm };

import type { FieldValues } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDefaultForm } from "~/hooks/useDefaultForm";
import type { WrapperProperties } from "./type/model";
import { schema } from "./type/schema";

const Wrapper = <T extends FieldValues = never>({
  defaultValues,
  children,
  onSubmit,
}: WrapperProperties<T>): JSX.Element => {
  const methods = useDefaultForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export { Wrapper };

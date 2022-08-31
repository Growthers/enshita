import type { FieldValues } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDefaultForm } from "~/hooks/useDefaultForm";
import type { WrapperProperties } from "./type/model";
import { schema } from "./type/schema";

const Wrapper = <T extends FieldValues = never>({
  defaultValues,
  children,
}: WrapperProperties<T>): JSX.Element => {
  const methods = useDefaultForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export { Wrapper };

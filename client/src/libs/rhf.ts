import type { FieldPathValue, FieldValues, Path } from "react-hook-form";

export type FieldByType<T extends FieldValues, S> = {
  [P in Path<T>]: S extends FieldPathValue<T, P> ? P : never;
}[Path<T>];

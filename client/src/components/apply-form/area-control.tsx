import { AreaInput } from "~/components/form-input/area-input";
import type { FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import styles from "~/styles/components/apply-form/area.module.scss";
import type { AreaControlProperties } from "./type/model";

const AreaControl = <T extends FieldValues>({
  name,
  label,
  ...rest
}: AreaControlProperties<T>): JSX.Element => (
  <section className={styles["enshita-apply-form-area-box"]}>
    <label htmlFor={name} className={styles["enshita-apply-form-area-label"]}>
      {label}
    </label>
    <Controller
      render={({ field, fieldState: { error } }) => (
        <AreaInput
          error={error}
          aria-invalid={error ? "true" : "false"}
          aria-label={name}
          inputStyles={styles["enshita-apply-form-area"]}
          id={name}
          {...field}
          {...rest}
        />
      )}
      name={name}
    />
  </section>
);

export { AreaControl };

import { TextInput } from "~/components/input/text-input";
import type { FieldValues } from "react-hook-form";
import styles from "~/styles/components/apply-form/input.module.scss";
import { Controller } from "react-hook-form";
import type { InputControlProperties } from "./type/model";

const InputControl = <T extends FieldValues>({
  name,
  label,
  description,
  placeholder,
  ...rest
}: InputControlProperties<T>): JSX.Element => (
  <section className={styles["enshita-apply-form-input-box"]}>
    <label htmlFor={name} className={styles["enshita-apply-form-input-label"]}>
      {label}
    </label>
    {description && (
      <p className={styles["enshita-apply-form-description"]}>{description}</p>
    )}
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextInput
          error={error}
          inputStyles={styles["enshita-apply-form-input"]}
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          aria-label={name}
          id={name}
          {...field}
          {...rest}
        />
      )}
      name={name}
    />
  </section>
);

export { InputControl };

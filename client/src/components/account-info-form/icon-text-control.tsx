import { Controller, FieldValues, useFormContext } from "react-hook-form";
import styles from "~/styles/components/account-info/info-control.module.scss";
import { TextInput } from "~/components/form-element/icon-text-input";
import type { TextControlProps } from "./type/model";

const TextControl = <T extends FieldValues>({
  name,
  label,
  icon,
  ...rest
}: TextControlProps<T>): JSX.Element => {
  const { control } = useFormContext();
  return (
    <section className={styles["enshita-control-body"]}>
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <TextInput error={error} id={name} icon={icon} {...field} {...rest} />
        )}
      />
    </section>
  );
};

export { TextControl };

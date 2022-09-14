import { Controller, FieldValues, useFormContext } from "react-hook-form";
import styles from "~/styles/components/account-info/info-control.module.scss";
import { PasswordInput } from "~/components/form-element/password-input";
import { PasswordControlProps } from "~/components/account-info-form/type/model";

const PasswordControl = <T extends FieldValues>({
  name,
  label,
  ...rest
}: PasswordControlProps<T>): JSX.Element => {
  const { control } = useFormContext();
  return (
    <section className={styles["enshita-control-body"]}>
      <label htmlFor={name}>{label}</label>

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <PasswordInput error={error} id={name} {...field} {...rest} />
        )}
      />
    </section>
  );
};

export { PasswordControl };

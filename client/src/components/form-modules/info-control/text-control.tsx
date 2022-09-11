import { Controller, FieldValues, useFormContext } from "react-hook-form";
import styles from "~/styles/components/form-modules/info-control/text.module.scss";
import { TextInput } from "~/components/form-modules/info-input/text-input";
import { TextControlProps } from "./type/model";

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

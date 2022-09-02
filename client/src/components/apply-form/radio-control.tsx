import { RadioInput } from "~/components/form-input/radio-input";
import type { FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import styles from "~/styles/components/apply-form/radio.module.scss";
import errorStyles from "~/styles/components/form-input/input.module.scss";
import type { RadioControlProperties } from "./type/model";

const RadioControl = <T extends FieldValues>({
  name,
  items,
  label,
  ...rest
}: RadioControlProperties<T>): JSX.Element => (
  <section className={styles["enshita-apply-form-radio-box"]}>
    <h3
      className={styles["enshita-apply-form-radio-label"]}
      aria-label="label for radio"
    >
      {label}
    </h3>
    <Controller
      render={({ field, fieldState: { error } }) => {
        const { value, ...omitField } = field;
        return (
          <>
            {items.map(item => (
              <div
                key={item.id}
                className={styles["enshita-apply-form-radio-input-box"]}
              >
                <RadioInput
                  checked={item.id === value}
                  id={item.id}
                  value={item.id}
                  {...omitField}
                  {...rest}
                />
                <div
                  className={styles["enshita-apply-form-radio-input-label-box"]}
                >
                  <label htmlFor={item.id}>{item.name}</label>
                  <p
                    className={
                      styles["enshita-apply-form-radio-input-label-text"]
                    }
                  >
                    {item.currentCount}
                  </p>
                  <p>{item.total}</p>
                </div>
              </div>
            ))}
            {error && (
              <p
                aria-label="error message"
                className={errorStyles["enshita-input-error"]}
              >
                {error.message}
              </p>
            )}
          </>
        );
      }}
      name={name}
    />
  </section>
);

export { RadioControl };

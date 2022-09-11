import { forwardRef } from "react";
import styles from "~/styles/components/form-input/input.module.scss";
import type { TextInputProperties } from "./type/model";

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<HTMLInputElement, TextInputProperties>(
  ({ inputStyles, error, ...rest }, ref) => (
    <>
      <input ref={ref} className={inputStyles} {...rest} />
      {error && (
        <p aria-label="error message" className={styles["enshita-input-error"]}>
          {error.message}
        </p>
      )}
    </>
  ),
);

export { TextInput };

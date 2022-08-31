import { forwardRef } from "react";
import styles from "~/styles/components/input/input.module.scss";
import type { TextInputProperties } from "./type/model";

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<HTMLInputElement, TextInputProperties>(
  ({ inputStyles, error, ...props }, ref) => (
    <>
      <input ref={ref} className={inputStyles} {...props} />
      {error && (
        <p aria-label="error message" className={styles["enshita-input-error"]}>
          {error.message}
        </p>
      )}
    </>
  ),
);

export { TextInput };

import { forwardRef } from "react";
import styles from "~/styles/components/form-input/input.module.scss";
import type { AreaInputProperties } from "./type/model";

// eslint-disable-next-line react/display-name
const AreaInput = forwardRef<HTMLTextAreaElement, AreaInputProperties>(
  ({ inputStyles, error, ...rest }, ref) => (
    <>
      <textarea ref={ref} className={inputStyles} {...rest} />
      {error && (
        <p aria-label="error message" className={styles["enshita-input-error"]}>
          {error.message}
        </p>
      )}
    </>
  ),
);

export { AreaInput };

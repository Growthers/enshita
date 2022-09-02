import { forwardRef } from "react";
import errorStyles from "~/styles/components/form-input/input.module.scss"
import styles from "~/styles/components/form-input/radio.module.scss"
import type { RadioInputProperties } from "./type/model";

// eslint-disable-next-line react/display-name
const RadioInput = forwardRef<HTMLInputElement, RadioInputProperties>(({ inputStyles, id, value, name, current, total, error, ...rest }, ref) => (
  <>
    <input ref={ref} id={id} name={id} className={inputStyles} type="radio" value={value} {...rest} />
    <div className={styles["enshita-radio-input-label-box"]}>
      <label htmlFor={id}>{name}</label>
      <p className={styles["enshita-radio-input-label-text"]}>{current}</p>
      <p>{total}</p>
    </div>
    {error && (
      <p aria-label="error message" className={errorStyles["enshita-input-error"]}>
        {error.message}
      </p>
    )}
  </>
))

export { RadioInput }

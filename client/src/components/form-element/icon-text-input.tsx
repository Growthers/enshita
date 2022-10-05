import { Icon } from "@iconify/react";
import { forwardRef } from "react";
import styles from "~/styles/components/form-input/info-input.module.scss";
import type { IconTextInputProperties } from "./type/model";

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<HTMLInputElement, IconTextInputProperties>(
  ({ inputStyles, error, icon, ...rest }, ref): JSX.Element => (
    <>
      <div className={`${styles["enshita-input-textarea"]} ${inputStyles}`}>
        <div className={styles["enshita-input-icon"]}>
          <Icon icon={icon} width="15" height="15" />
        </div>
        <input ref={ref} className={styles["enshita-input-normal"]} {...rest} />
      </div>
      <p className={styles["enshita-input-error"]}>
        {error && <small>{error.message}</small>}
      </p>
    </>
  ),
);

export { TextInput };

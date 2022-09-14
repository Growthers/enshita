import { Icon } from "@iconify/react";
import { forwardRef } from "react";
import styles from "~/styles/components/form-modules/info-input/text.module.scss";
import type { TextInputProps } from "./type/model";

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ inputStyle, error, icon, ...rest }, ref): JSX.Element => (
    <>
      <div className={`${styles["enshita-input-textarea"]} ${inputStyle}`}>
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

import { Icon } from "@iconify/react";
import { forwardRef, useState } from "react";
import styles from "~/styles/components/form-input/info-input.module.scss";
import type { PasswordInputProps } from "./type/model";

// eslint-disable-next-line react/display-name
const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ inputStyles, error, ...rest }, ref): JSX.Element => {
    const [isShow, setShow] = useState(true);
    return (
      <>
        <div className={`${styles["enshita-input-textarea"]} ${inputStyles}`}>
          <div className={styles["enshita-input-icon"]}>
            <Icon icon="bxs:lock-alt" width="15" height="15" />
          </div>
          <input
            ref={ref}
            type={isShow ? "password" : "text"}
            className={styles["enshita-input-password"]}
            {...rest}
          />
          <button
            type="button"
            className={styles["enshita-input-icon"]}
            onClick={() => {
              setShow(!isShow);
            }}
          >
            <Icon
              icon={
                isShow
                  ? "ant-design:eye-filled"
                  : "ant-design:eye-invisible-filled"
              }
              width="15"
              height="15"
            />
          </button>
        </div>
        <p className={styles["enshita-input-error"]}>
          {error && <small>{error.message}</small>}
        </p>
      </>
    );
  },
);

export { PasswordInput };

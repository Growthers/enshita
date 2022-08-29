import { useState } from "react";
import styles from "~/styles/components/form/input/textArea.module.scss";
import { Icon } from "@iconify/react";
import { PasswordProps } from "~/components/form/input/type/model";

const Password = <T extends string>({
  label,
  discription,
  register,
  itsError,
}: PasswordProps<T>): JSX.Element => {
  const [IsShow, setShow] = useState(true);

  return (
    <div className={styles["enshita-textarea-form-body"]}>
      <label htmlFor={label}>
        <p>
          <small>{discription}</small>
        </p>
        <div className={styles["enshita-textarea-textarea"]}>
          <div className={styles["enshita-textarea-icon"]}>
            <Icon icon="bxs:lock-alt" width="15" height="15" />
          </div>
          <input
            type={IsShow ? "password" : "text"}
            className={styles["enshita-textarea-input-password"]}
            {...register}
          />
          <button
            type="button"
            className={styles["enshita-textarea-icon"]}
            onClick={() => {
              setShow(!IsShow);
            }}
          >
            {IsShow && (
              <Icon icon="ant-design:eye-filled" width="15" height="15" />
            )}
            {!IsShow && (
              <Icon
                icon="ant-design:eye-invisible-filled"
                width="15"
                height="15"
              />
            )}
          </button>
        </div>
        <div className={styles["enshita-textarea-error"]}>
          {itsError && (
            <p>
              <small>{`${
                itsError.ref?.value === ""
                  ? "this field is required"
                  : itsError.message
              }`}</small>
            </p>
          )}
        </div>
      </label>
    </div>
  );
};

export default Password;

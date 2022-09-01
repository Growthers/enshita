import styles from "~/styles/components/form/input/textArea.module.scss";
import { Icon } from "@iconify/react";
import { NormalProps } from "~/components/form/input/type/model";

const Normal = <T extends string>({
  label,
  discription,
  icon,
  register,
  itsError,
}: NormalProps<T>): JSX.Element => (
  <div className={styles["enshita-textarea-form-body"]}>
    <label htmlFor={label}>
      <p>
        <small>{discription}</small>
      </p>
      <div className={styles["enshita-textarea-textarea"]}>
        <div className={styles["enshita-textarea-icon"]}>
          <Icon icon={icon} width="15" height="15" />
        </div>
        <input
          className={styles["enshita-textarea-input-normal"]}
          {...register}
        />
      </div>
      <div className={styles["enshita-textarea-error"]}>
        {itsError && (
          <p>
            <small>{itsError.message}</small>
          </p>
        )}
      </div>
    </label>
  </div>
);

export default Normal;

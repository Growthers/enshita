import type { FC } from "react";
import { InlineIcon } from "@iconify/react";
import styles from "~/styles/button.module.scss";
import type { ButtonIconProperties, ButtonProperties } from "./type/model";

const ButtonIcon: FC<ButtonIconProperties> = ({ icon, css, ...rest }) => (
  <div className={`${styles["enshita-button-icon-box"]} ${css}`}>
    <InlineIcon
      icon={icon}
      className={styles["enshita-button-icon"]}
      {...rest}
    />
  </div>
);

/* eslint-disable react/button-has-type */
const Button: FC<ButtonProperties> = ({
  children,
  icon,
  variant,
  disabled,
  iconStyles,
  boxStyles,
  textStyles,
  type,
  ...rest
}) => (
  <button
    className={`${styles["enshita-button-box"]} ${boxStyles}`}
    disabled={disabled}
    tabIndex={0}
    type={type}
    {...rest}
  >
    {variant === "icon" && <ButtonIcon icon={icon} css={iconStyles} />}
    {children && (
      <p className={`${styles["enshita-button-text"]} ${textStyles}`}>
        {children}
      </p>
    )}
  </button>
);
/* eslint-enable react/button-has-type */

export { Button };

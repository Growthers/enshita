import type { FC } from "react";
import { InlineIcon } from "@iconify/react";
import styles from "~/styles/components/button/anchor-button.module.scss";
import type {
  ButtonIconProperties,
  AnchorButtonProperties,
} from "./type/model";

const ButtonIcon: FC<ButtonIconProperties> = ({ icon, css, ...rest }) => (
  <div className={`${styles["enshita-button-icon-box"]} ${css}`}>
    <InlineIcon
      icon={icon}
      className={styles["enshita-button-icon"]}
      {...rest}
    />
  </div>
);

const AnchorButton: FC<AnchorButtonProperties> = ({
  children,
  icon,
  variant,
  iconStyles,
  boxStyles,
  textStyles,
  isSamePage,
  href,
  ...rest
}) => (
  <a
    className={`${styles["enshita-button-box"]} ${boxStyles}`}
    href={href}
    target={isSamePage ? "" : "_blank"}
    rel="noopener noreferrer"
    role="button"
    {...rest}
  >
    {variant === "icon" && <ButtonIcon icon={icon} css={iconStyles} />}
    {children && (
      <p className={`${styles["enshita-button-text"]} ${textStyles}`}>
        {children}
      </p>
    )}
  </a>
);

export { AnchorButton };

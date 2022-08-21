import { FC, ReactNode } from "react";
import styles from "~/styles/button.module.scss";

type Props = {
  children: string | ReactNode;
  onClick?: () => void;
  txColor?: string;
  bgColor?: string;
  style?: string;
  buttonType?: JSX.IntrinsicElements["button"]["type"];
};

const Button: FC<Props> = ({
  children,
  onClick = () => {},
  txColor = "enshita-button-color-brack",
  bgColor = "enshita-button-bg-secondary",
  style = "enshita-button-normal",
  buttonType = "button",
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={buttonType}
    onClick={onClick}
    className={`
      ${styles[txColor]}
      ${styles[bgColor]}
      ${styles[style]}
      `}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  txColor: "enshita-button-color-brack",
  bgColor: "enshita-button-bg-secondary",
  style: "enshita-button-normal",
  buttonType: "button",
};

export default Button;

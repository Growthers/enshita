import type { IconProps, IconifyIcon } from "@iconify/react";
import type { ComponentPropsWithoutRef } from "react";

export type ButtonIconProperties = IconProps & {
  ref?: never;
  css?: string;
};

type ButtonVariantProperties =
  | {
      variant: "normal";
      icon?: never;
      iconStyles?: never;
    }
  | {
      variant: "icon";
      icon: string | IconifyIcon;
      iconStyles?: string;
    };

export type ButtonProperties = ComponentPropsWithoutRef<"button"> &
  ButtonVariantProperties & {
    children?: string;
    boxStyles?: string;
    textStyles?: string;
  };

export type AnchorButtonProperties = ComponentPropsWithoutRef<"a"> &
  ButtonVariantProperties & {
    children?: string;
    boxStyles?: string;
    textStyles?: string;
  };

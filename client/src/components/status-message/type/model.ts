import type { ReactNode } from "react";

export type StatusMessageProps = {
  code: number;
  message: string;
  children: ReactNode;
};

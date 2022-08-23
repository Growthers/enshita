import { FC } from "react";
import RegiserForm from "~/components/registerForm";

const RegisterAccount: FC = () => (
  <RegiserForm mail="example@example.com" type="account" />
);

export { RegisterAccount };

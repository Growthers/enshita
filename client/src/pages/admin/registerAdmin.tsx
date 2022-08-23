import { FC } from "react";
import RegiserForm from "~/components/registerForm";

const RegisterAdmin: FC = () => (
  <RegiserForm mail="example@example.com" type="admin" />
);

export { RegisterAdmin };

import { z } from "zod";
import { accountInfoFormSchema } from "./schema";

export type TokenCheckProps = {
  mail: string;
  name: string;
};

export type PageStatusProps = {
  status: "loading" | "failure" | "success";
  pageData: TokenCheckProps;
};

export type AccountInfoFormProps = {
  mail: string;
  userName: string;
};

export type AccountInfoFormFieldValues = z.infer<typeof accountInfoFormSchema>;

import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(1, { message: "名前は必須項目です" })
    .max(60, { message: "60字以内で入力してください" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスは必須項目です" })
    .email({ message: "無効なメールアドレスです" }),
  speakerQuotaTypeId: z.string().min(1).uuid(),
  title: z
    .string()
    .min(1, { message: "タイトルは必須項目です" })
    .max(100, { message: "100字以内で入力してください" }),
  paragraph: z.nullable(
    z.string().max(3000, { message: "3000字以内で入力してください" }),
  ),
});

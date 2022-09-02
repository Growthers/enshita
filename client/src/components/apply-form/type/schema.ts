import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(1, { message: "名前は必須入力です。" })
    .max(60, { message: "60字以内で入力してください。" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスは必須入力です。" })
    .email({ message: "無効なメールアドレスです。" }),
  speakerQuotaTypeId: z.string().uuid({ message: "登壇枠を選んでください。" }),
  title: z
    .string()
    .min(1, { message: "タイトルは必須入力です。" })
    .max(100, { message: "100字以内で入力してください。" }),
  paragraph: z.nullable(
    z.string().max(3000, { message: "3000字以内で入力してください。" }),
  ),
});

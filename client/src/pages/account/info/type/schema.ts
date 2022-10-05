import * as z from "zod";

const mailModel = z
  .string()
  .email({ message: "this text is not mail address" });

const userNameModel = z
  .string()
  .min(1, {
    message: "this field is required",
  })
  .min(3, {
    message: "Minimum length is 3 characters",
  })
  .max(64, {
    message: "Maximum length is 64 characters",
  })
  .regex(/^\w+?$/, {
    message: "Contains invalid characters(able to use [ a-z, A-Z, 0-9, _ ])",
  });

const passwordModel = z
  .string()
  .min(1, {
    message: "this field is required",
  })
  .min(5, {
    message: "Minimum length is 5 characters",
  })
  .max(64, {
    message: "Maximum length is 64 characters",
  })
  .regex(/^[\w-]+?$/, {
    message: "Contains invalid characters(able to use [ a-z, A-Z, 0-9, _- ])",
  });

const accountInfoFormSchema = z.object({
  mail: mailModel,
  userName: userNameModel,
  newPassword: passwordModel,
  reNewPassword: passwordModel,
  currentPassword: passwordModel,
});

export { mailModel, passwordModel, userNameModel, accountInfoFormSchema };

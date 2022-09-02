import * as z from "zod";

const mailModel = z.string().email();

const userNameModel = z
  .string()
  .min(1, {
    message: "this field is required",
  })
  .min(3, {
    message: "Minimum length is 3 characters",
  })
  .max(128, {
    message: "Maximum length is 3 characters",
  })
  .regex(/^\w+?$/, {
    message: "Contains invalid characters(able to use [ a-z, A-Z, 0-9, _ ])",
  });

const passwordModel = z
  .string()
  .min(1, {
    message: "this field is required",
  })
  .min(3, {
    message: "Minimum length is 3 characters",
  })
  .max(128, {
    message: "Maximum length is 3 characters",
  })
  .regex(/^[\w-]+?$/, {
    message: "Contains invalid characters(able to use [ a-z, A-Z, 0-9, _- ])",
  });

export { mailModel, passwordModel, userNameModel };

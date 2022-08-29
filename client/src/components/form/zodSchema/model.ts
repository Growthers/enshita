import * as z from "zod";

const mailModel = z.string().email();

const userNameModel = z
  .string()
  .min(3)
  .max(128)
  .regex(/^[\w_]+?$/, {
    message: "Contains invalid characters(able to use [a-z],[A-Z],[0-9],[_])",
  });

const passwordModel = z
  .string()
  .min(3)
  .max(128)
  .regex(/^[\w_-]+?$/, {
    message: "Contains invalid characters(able to use [a-z],[A-Z],[0-9],[_-])",
  });

export { mailModel, passwordModel, userNameModel };

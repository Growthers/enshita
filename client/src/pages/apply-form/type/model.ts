import { z } from "zod";
import { schema } from "~/pages/apply-form/type/schema";

export type ApplyFormPageProperties = {
  eventId: string;
};

export type ApplyForm = z.infer<typeof schema>;

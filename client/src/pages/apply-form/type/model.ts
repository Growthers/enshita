import { z } from "zod"
import { schema } from "~/components/apply-form/type/schema";

export type ApplyFormPageProperties = {
  eventId: string;
}

export type ApplyForm = z.infer<typeof schema>

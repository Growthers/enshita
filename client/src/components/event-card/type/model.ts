import type { Event } from "~/types/global-models";
import type { ComponentProps } from "react";

export type ChipProperties = Pick<Event, "status"> & ComponentProps<"div">;

export type EventCardProperties = Omit<Event, "description" | "endDate" | "venue" | "deadline">

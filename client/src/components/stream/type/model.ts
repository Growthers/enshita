import { ReactNode } from "react";

export type CommentProperties = {
  platform: "twitter" | "discord";
  name: string;
  iconUrl: string;
  content: string;
};

export type SceneType =
  | "WAITING"
  | "OPENING"
  | "SPEAKING"
  | "CHANGING"
  | "BREAKING"
  | "ENDING";

export type TalkInfoProperties = {
  order: number;
  speaker: SpeakerProperties;
};

export type ClockProperties = {
  first: number;
  second: number;
};

export type SpeakerProperties = {
  id: string;
  name: string;
  title: string;
  duration: string | ReactNode;
};

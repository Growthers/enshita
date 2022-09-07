/**
 * 登壇枠の型
 */
export type SpeakerQuotaType = {
  id: string;
  name: string;
  time: number;
  currentCount: number;
  total: number;
};

/**
 * イベントの型
 */
export type Event = {
    eventId: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    venue?: string;
    ogp: string;
    status:
  | "preparing"
  | "open"
  | "close"
  | "suddenOpen"
  | "suddenClose"
  | "finish";
hashTag?: string;
deadline: string;
speakerQuotaTypeList: Array<SpeakerQuotaType>;
};

export type EventModeDTO = "online" | "in_person" | "hybrid";

export type EventDTO = {
    id: string;
    title: string;
    slug: string;
    startsAt: string;
    mode: EventModeDTO;
    city?: string;
    summary?: string;
};
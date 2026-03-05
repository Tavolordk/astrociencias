import { EventId } from "@/modules/events/domain/value-objects/EventId";
import { NonEmptyString } from "@/shared/domain/value-objects/NonEmptyString";

export type EventMode = "online" | "in_person" | "hybrid";

export class Event {
    private constructor(
        public readonly id: EventId,
        public readonly title: NonEmptyString,
        public readonly slug: NonEmptyString,
        public readonly startsAt: Date,
        public readonly mode: EventMode,
        public readonly city?: string,
        public readonly summary?: string
    ) { }

    static create(params: {
        id: string;
        title: string;
        slug: string;
        startsAt: Date;
        mode: EventMode;
        city?: string;
        summary?: string;
    }): Event {
        if (Number.isNaN(params.startsAt.getTime())) throw new Error("Invalid startsAt");

        return new Event(
            EventId.create(params.id),
            NonEmptyString.create(params.title, "title"),
            NonEmptyString.create(params.slug, "slug"),
            params.startsAt,
            params.mode,
            params.city,
            params.summary
        );
    }

    isUpcoming(now = new Date()): boolean {
        return this.startsAt.getTime() >= now.getTime();
    }
}
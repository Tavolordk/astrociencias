import { NonEmptyString } from "@/shared/domain/value-objects/NonEmptyString";

export class EventId {
    private constructor(private readonly value: NonEmptyString) { }

    static create(raw: string): EventId {
        return new EventId(NonEmptyString.create(raw, "eventId"));
    }

    get(): string {
        return this.value.get();
    }
}
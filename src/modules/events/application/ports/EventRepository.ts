import type { Event } from "@/modules/events/domain/entities/Event";

export interface EventRepository {
    listAll(): Promise<Event[]>;
}
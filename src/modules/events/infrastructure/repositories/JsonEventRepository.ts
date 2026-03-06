import type { EventRepository } from "@/modules/events/application/ports/EventRepository";
import type { EventDTO } from "@/modules/events/application/dtos/EventDTO";
import { EventMapper } from "@/modules/events/application/mappers/EventMapper";
import type { Event } from "@/modules/events/domain/entities/Event";

import eventsData from "@/data/events.json";

export class JsonEventRepository implements EventRepository {
    async listAll(): Promise<Event[]> {
        const dtos = eventsData as EventDTO[];
        return dtos.map(EventMapper.fromDTO);
    }

    async getBySlug(slug: string): Promise<Event | null> {
        const dtos = eventsData as EventDTO[];
        const found = dtos.find((event) => event.slug === slug);

        if (!found) return null;

        return EventMapper.fromDTO(found);
    }
}
import type { EventDTO } from "@/modules/events/application/dtos/EventDTO";
import { Event } from "@/modules/events/domain/entities/Event";

export class EventMapper {
    static fromDTO(dto: EventDTO): Event {
        return Event.create({
            id: dto.id,
            title: dto.title,
            slug: dto.slug,
            startsAt: new Date(dto.startsAt),
            mode: dto.mode,
            city: dto.city,
            summary: dto.summary,
        });
    }
}
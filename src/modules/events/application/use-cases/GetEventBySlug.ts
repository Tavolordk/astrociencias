import type { EventRepository } from "@/modules/events/application/ports/EventRepository";
import type { EventDetailVM } from "@/modules/events/presentation/view-models/EventDetailVM";

export class GetEventBySlug {
    constructor(private readonly repo: EventRepository) { }

    async execute(slug: string): Promise<EventDetailVM | null> {
        const event = await this.repo.getBySlug(slug);

        if (!event) return null;

        return {
            title: event.title.get(),
            slug: event.slug.get(),
            summary: event.summary ?? "Próximamente más información sobre este evento.",
            city: event.city ?? "Por definir",
            modeLabel: labelMode(event.mode),
            dateLabel: formatFullDate(event.startsAt),
            timeLabel: formatTime(event.startsAt),
            isoDate: event.startsAt.toISOString(),
        };
    }
}

function labelMode(mode: string): string {
    if (mode === "online") return "Online";
    if (mode === "in_person") return "Presencial";
    return "Híbrido";
}

function formatFullDate(date: Date): string {
    return new Intl.DateTimeFormat("es-MX", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(date);
}

function formatTime(date: Date): string {
    return new Intl.DateTimeFormat("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);
}
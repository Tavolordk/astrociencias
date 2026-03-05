import type { EventRepository } from "@/modules/events/application/ports/EventRepository";
import type { EventCardVM } from "@/modules/events/presentation/view-models/EventCardVM";

type ListUpcomingEventsInput = {
    limit?: number;
    now?: Date;
};

export class ListUpcomingEvents {
    constructor(private readonly repo: EventRepository) { }

    async execute(input: ListUpcomingEventsInput = {}): Promise<EventCardVM[]> {
        const now = input.now ?? new Date();
        const limit = input.limit ?? 6;

        const events = await this.repo.listAll();

        const upcoming = events
            .filter((e) => e.isUpcoming(now))
            .sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime())
            .slice(0, limit);

        return upcoming.map((e) => ({
            title: e.title.get(),
            summary: e.summary,
            whenLabel: formatWhen(e.startsAt),
            whereLabel: e.city ? `${labelMode(e.mode)} · ${e.city}` : labelMode(e.mode),
            modeLabel: labelMode(e.mode),
            href: `/events#${e.slug.get()}`,
        }));
    }
}

function labelMode(mode: string): string {
    if (mode === "online") return "Online";
    if (mode === "in_person") return "Presencial";
    return "Híbrido";
}

function formatWhen(date: Date): string {
    return new Intl.DateTimeFormat("es-MX", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);
}
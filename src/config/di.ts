import { env } from "@/config/env";
import type { EventRepository } from "@/modules/events/application/ports/EventRepository";
import { JsonEventRepository } from "@/modules/events/infrastructure/repositories/JsonEventRepository";
import { ListUpcomingEvents } from "@/modules/events/application/use-cases/ListUpcomingEvents";
import { GetEventBySlug } from "@/modules/events/application/use-cases/GetEventBySlug";

export type Container = {
  eventsRepo: EventRepository;
  listUpcomingEvents: ListUpcomingEvents;
  getEventBySlug: GetEventBySlug;
};

export function buildContainer(): Container {
  const eventsRepo: EventRepository =
    env.EVENTS_SOURCE === "json" ? new JsonEventRepository() : new JsonEventRepository();

  const listUpcomingEvents = new ListUpcomingEvents(eventsRepo);
  const getEventBySlug = new GetEventBySlug(eventsRepo);

  return { eventsRepo, listUpcomingEvents, getEventBySlug };
}
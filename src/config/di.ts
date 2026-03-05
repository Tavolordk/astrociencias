import { env } from "@/config/env";
import type { EventRepository } from "../modules/events/application/ports/EventRepository";
import { JsonEventRepository } from "../modules/events/infrastructure/repositories/JsonEventRepository";
import { ListUpcomingEvents } from "../modules/events/application/use-cases/ListUpcomingEvents";

export type Container = {
  eventsRepo: EventRepository;
  listUpcomingEvents: ListUpcomingEvents;
};

export function buildContainer(): Container {
  const eventsRepo: EventRepository =
    env.EVENTS_SOURCE === "json" ? new JsonEventRepository() : new JsonEventRepository();

  const listUpcomingEvents = new ListUpcomingEvents(eventsRepo);

  return { eventsRepo, listUpcomingEvents };
}
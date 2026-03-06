import { env } from "@/config/env";
import type { EventRepository } from "@/modules/events/application/ports/EventRepository";
import { JsonEventRepository } from "@/modules/events/infrastructure/repositories/JsonEventRepository";
import { ListUpcomingEvents } from "@/modules/events/application/use-cases/ListUpcomingEvents";
import { GetEventBySlug } from "@/modules/events/application/use-cases/GetEventBySlug";
import type { SkyRepository } from "@/modules/sky/application/ports/SkyRepository";
import { JsonSkyRepository } from "@/modules/sky/infrastructure/repositories/JsonSkyRepository";
import { GetSkyObjectsByCity } from "@/modules/sky/application/use-cases/GetSkyObjectsByCity";

export type Container = {
  eventsRepo: EventRepository;
  listUpcomingEvents: ListUpcomingEvents;
  getEventBySlug: GetEventBySlug;
  skyRepo: SkyRepository;
  getSkyObjectsByCity: GetSkyObjectsByCity;
};

export function buildContainer(): Container {
  const eventsRepo: EventRepository =
    env.EVENTS_SOURCE === "json" ? new JsonEventRepository() : new JsonEventRepository();

  const skyRepo: SkyRepository = new JsonSkyRepository();

  const listUpcomingEvents = new ListUpcomingEvents(eventsRepo);
  const getEventBySlug = new GetEventBySlug(eventsRepo);
  const getSkyObjectsByCity = new GetSkyObjectsByCity(skyRepo);

  return {
    eventsRepo,
    listUpcomingEvents,
    getEventBySlug,
    skyRepo,
    getSkyObjectsByCity,
  };
}
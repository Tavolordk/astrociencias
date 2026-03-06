import type { SkyObject } from "@/modules/sky/domain/entities/SkyObject";

export interface SkyRepository {
    listByCity(city: string): Promise<SkyObject[]>;
}
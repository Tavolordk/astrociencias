import skyObjectsData from "@/data/sky-objects.json";
import type { SkyObjectDTO } from "@/modules/sky/application/dtos/SkyObjectDTO";
import type { SkyRepository } from "@/modules/sky/application/ports/SkyRepository";
import { SkyObjectMapper } from "@/modules/sky/application/mappers/SkyObjectMapper";
import type { SkyObject } from "@/modules/sky/domain/entities/SkyObject";

export class JsonSkyRepository implements SkyRepository {
    async listByCity(city: string): Promise<SkyObject[]> {
        const dtos = skyObjectsData as SkyObjectDTO[];

        return dtos
            .filter((item) => item.city === city)
            .map(SkyObjectMapper.fromDTO);
    }
}
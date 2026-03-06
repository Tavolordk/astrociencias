import type { SkyObjectDTO } from "@/modules/sky/application/dtos/SkyObjectDTO";
import { SkyObject } from "@/modules/sky/domain/entities/SkyObject";

export class SkyObjectMapper {
    static fromDTO(dto: SkyObjectDTO): SkyObject {
        return SkyObject.create({
            id: dto.id,
            name: dto.name,
            type: dto.type,
            difficulty: dto.difficulty,
            city: dto.city,
            altitude: dto.altitude,
            description: dto.description,
            x: dto.x,
            y: dto.y,
        });
    }
}
import type { SkyRepository } from "@/modules/sky/application/ports/SkyRepository";
import type { SkyExploreVM } from "@/modules/sky/presentation/view-models/SkyExploreVM";

export class GetSkyObjectsByCity {
    constructor(private readonly repo: SkyRepository) { }

    async execute(city: string): Promise<SkyExploreVM> {
        const items = await this.repo.listByCity(city);

        return {
            city,
            summary: buildSummary(items.length, city),
            items: items.map((item) => ({
                id: item.id,
                name: item.name,
                typeLabel: mapType(item.type),
                difficulty: item.difficulty,
                altitude: item.altitude,
                description: item.description,
                x: item.x,
                y: item.y,
            })),
        };
    }
}

function mapType(type: string): string {
    if (type === "moon") return "Luna";
    if (type === "planet") return "Planeta";
    if (type === "cluster") return "Cúmulo";
    return "Constelación";
}

function buildSummary(total: number, city: string): string {
    return `${total} objetos recomendados para observar hoy desde ${city}.`;
}
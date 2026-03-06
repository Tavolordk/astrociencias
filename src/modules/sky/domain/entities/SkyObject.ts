export type SkyObjectType = "moon" | "planet" | "cluster" | "constellation";

export class SkyObject {
    private constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly type: SkyObjectType,
        public readonly difficulty: string,
        public readonly city: string,
        public readonly altitude: string,
        public readonly description: string,
        public readonly x: number,
        public readonly y: number
    ) { }

    static create(params: {
        id: string;
        name: string;
        type: SkyObjectType;
        difficulty: string;
        city: string;
        altitude: string;
        description: string;
        x: number;
        y: number;
    }): SkyObject {
        if (!params.id?.trim()) throw new Error("SkyObject id is required");
        if (!params.name?.trim()) throw new Error("SkyObject name is required");
        if (!params.city?.trim()) throw new Error("SkyObject city is required");
        if (params.x < 0 || params.x > 100) throw new Error("SkyObject x must be between 0 and 100");
        if (params.y < 0 || params.y > 100) throw new Error("SkyObject y must be between 0 and 100");

        return new SkyObject(
            params.id,
            params.name,
            params.type,
            params.difficulty,
            params.city,
            params.altitude,
            params.description,
            params.x,
            params.y
        );
    }
}
export type SkyObjectDTO = {
    id: string;
    name: string;
    type: "moon" | "planet" | "cluster" | "constellation";
    difficulty: string;
    city: string;
    altitude: string;
    description: string;
    x: number;
    y: number;
};
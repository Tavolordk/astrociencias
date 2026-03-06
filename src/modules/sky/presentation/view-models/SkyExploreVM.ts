export type SkyExploreItemVM = {
    id: string;
    name: string;
    typeLabel: string;
    difficulty: string;
    altitude: string;
    description: string;
    x: number;
    y: number;
};

export type SkyExploreVM = {
    city: string;
    summary: string;
    items: SkyExploreItemVM[];
};
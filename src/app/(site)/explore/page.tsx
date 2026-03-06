import { buildContainer } from "@/config/di";
import { SkyExploreClient } from "@/modules/sky/presentation/components/SkyExploreClient";

export const metadata = {
  title: "Explora el cielo | Astrociencias",
  description: "Mapa del cielo y objetos recomendados para observar.",
};

export default async function ExplorePage() {
  const { getSkyObjectsByCity } = buildContainer();
  const data = await getSkyObjectsByCity.execute("CDMX");

  return <SkyExploreClient initialData={data} />;
}

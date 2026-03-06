import HeroAlliance from "@/presentation/components/hero/HeroAlliance";
import PartnersSection from "@/presentation/components/partners/PartnersSection";
import AboutAlliance from "@/presentation/components/about/AboutAlliance";

export default function Home() {
  return (
    <main>
      <HeroAlliance />

      <PartnersSection />

      <AboutAlliance />
    </main>
  );
}

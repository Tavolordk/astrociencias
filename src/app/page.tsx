import HeroAlliance from "@/presentation/components/hero/HeroAlliance";
import PartnersSection from "@/presentation/components/partners/PartnersSection";
import AboutAlliance from "@/presentation/components/about/AboutAlliance";
import FeaturedProjects from "@/presentation/components/projects/FeaturedProjects";

export default function Home() {
  return (
    <main>
      <HeroAlliance />
      <PartnersSection />
      <AboutAlliance />
      <FeaturedProjects />
    </main>
  );
}
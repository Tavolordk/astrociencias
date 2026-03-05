import { GlassCard } from "@/shared/presentation/ui/GlassCard";

export default function ExplorePage() {
  return (
    <GlassCard className="p-6 rounded-3xl">
      <h1 className="text-2xl font-semibold">Explora • Cielo hoy</h1>
      <p className="mt-2 text-white/70">
        Aquí va el mapa interactivo + objetos visibles + filtros (con Clean
        Architecture).
      </p>
    </GlassCard>
  );
}

import { GlassCard } from "@/shared/presentation/ui/GlassCard";
import { Button } from "@/shared/presentation/ui/Button";

export default function EventNotFound() {
  return (
    <div className="py-10">
      <GlassCard className="mx-auto max-w-3xl p-8 text-center">
        <div className="text-sm text-white/60">404</div>
        <h1 className="mt-2 text-3xl font-bold">Evento no encontrado</h1>
        <p className="mt-3 text-white/70">
          El evento que buscas no existe o ya no está disponible.
        </p>
        <div className="mt-6">
          <a href="/events">
            <Button variant="primary">Volver a agenda</Button>
          </a>
        </div>
      </GlassCard>
    </div>
  );
}

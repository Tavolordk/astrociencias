import { buildContainer } from "@/config/di";
import { GlassCard } from "@/shared/presentation/ui/GlassCard";
import { EventCard } from "@/modules/events/presentation/components/EventCard";

export default async function EventsPage() {
  const { listUpcomingEvents } = buildContainer();
  const upcoming = await listUpcomingEvents.execute({ limit: 20 });

  return (
    <div className="space-y-4">
      <GlassCard className="p-6 rounded-3xl">
        <h1 className="text-2xl font-semibold">Agenda</h1>
        <p className="mt-2 text-white/70">
          Lista de eventos próximos (Use Case → Repo → Dominio → ViewModels →
          UI).
        </p>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-2">
        {upcoming.map((vm) => (
          <EventCard key={vm.href} vm={vm} />
        ))}
      </div>
    </div>
  );
}

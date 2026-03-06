import { notFound } from "next/navigation";
import { buildContainer } from "@/config/di";
import { GlassCard } from "@/shared/presentation/ui/GlassCard";
import { Button } from "@/shared/presentation/ui/Button";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const { getEventBySlug } = buildContainer();
  const event = await getEventBySlug.execute(slug);

  if (!event) {
    return {
      title: "Evento no encontrado | Astrociencias",
    };
  }

  return {
    title: `${event.title} | Astrociencias`,
    description: event.summary,
  };
}

export async function generateStaticParams() {
  const { eventsRepo } = buildContainer();
  const events = await eventsRepo.listAll();

  return events.map((event) => ({
    slug: event.slug.get(),
  }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const { getEventBySlug } = buildContainer();
  const event = await getEventBySlug.execute(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <GlassCard className="relative overflow-hidden p-8">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, var(--cyan), transparent 60%)",
          }}
        />

        <div className="relative">
          <a
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 hover:text-white"
          >
            ← Volver a agenda
          </a>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            {event.modeLabel}
          </div>

          <h1 className="mt-4 text-[clamp(34px,4vw,58px)] font-extrabold leading-[1.02] tracking-tight">
            {event.title}
          </h1>

          <p className="mt-4 max-w-[70ch] text-base text-white/70 leading-relaxed">
            {event.summary}
          </p>
        </div>
      </GlassCard>

      <div className="grid gap-5 md:grid-cols-12">
        <GlassCard className="p-6 md:col-span-8">
          <h2 className="text-xl font-semibold">Sobre este evento</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Este espacio puede crecer después con temario, ponentes, requisitos,
            liga de registro, aliados, materiales previos y preguntas
            frecuentes.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-white/50">Formato</div>
              <div className="mt-1 font-medium">{event.modeLabel}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-white/50">Ciudad</div>
              <div className="mt-1 font-medium">{event.city}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-white/50">Fecha</div>
              <div className="mt-1 font-medium capitalize">
                {event.dateLabel}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-white/50">Hora</div>
              <div className="mt-1 font-medium">{event.timeLabel}</div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 md:col-span-4">
          <div className="text-sm text-white/60">Registro</div>
          <div className="mt-2 text-xl font-semibold">Reserva tu lugar</div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Después conectamos este bloque a tu sistema real de registro o
            newsletter.
          </p>

          <div className="mt-5 space-y-3">
            <Button variant="primary" className="w-full">
              Quiero asistir
            </Button>
            <Button className="w-full">Compartir evento</Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

import { buildContainer } from "@/config/di";
import { GlassCard } from "@/shared/presentation/ui/GlassCard";
import { Button } from "@/shared/presentation/ui/Button";
import { EventCard } from "@/modules/events/presentation/components/EventCard";

export default async function HomePage() {
  const { listUpcomingEvents } = buildContainer();
  const upcoming = await listUpcomingEvents.execute({ limit: 4 });

  return (
    <div className="space-y-10">
      <section className="grid gap-4 md:grid-cols-12">
        <GlassCard className="p-6 md:col-span-7 rounded-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/75">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            Divulgación sin fronteras • Astrofísica • Planetaria • Tecnología •
            Educación
          </div>

          <h1 className="mt-4 text-[clamp(34px,4.2vw,56px)] font-extrabold leading-[1.02] tracking-tight">
            Tu acceso al universo,{" "}
            <span className="text-white/80">desde México hacia el mundo</span>.
          </h1>

          <p className="mt-3 text-white/70 leading-relaxed max-w-[65ch]">
            Explora el cielo de hoy, aprende con rutas cortas y participa en
            proyectos de ciencia ciudadana con una comunidad multidisciplinaria.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/explore">
              <Button variant="primary">Explorar cielo hoy</Button>
            </a>
            <a href="/events">
              <Button>Ver agenda</Button>
            </a>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              { n: "+ Comunidad", l: "multidisciplinaria" },
              { n: "Eventos", l: "presenciales y online" },
              { n: "Recursos", l: "abiertos y prácticos" },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="font-semibold">{s.n}</div>
                <div className="mt-1 text-xs text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 md:col-span-5 rounded-3xl">
          <div className="text-xs text-white/60">Cielo hoy</div>
          <div className="mt-1 text-lg font-semibold">
            Recomendaciones rápidas
          </div>

          <div className="mt-4 grid gap-3">
            <label className="text-xs text-white/60">Ciudad</label>
            <select className="rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white outline-none">
              <option>CDMX</option>
              <option>Guadalajara</option>
              <option>Monterrey</option>
              <option>Puebla</option>
            </select>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-white/60">Recomendado hoy</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>🌙 Luna</span>
                  <span className="text-xs text-white/60">Fase: 1/4</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🪐 Júpiter</span>
                  <span className="text-xs text-white/60">Alto</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>✨ Pléyades</span>
                  <span className="text-xs text-white/60">Fácil</span>
                </li>
              </ul>
            </div>

            <a href="/explore">
              <Button variant="primary" className="w-full">
                Ver mapa del cielo
              </Button>
            </a>
          </div>
        </GlassCard>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Agenda (próximos eventos)
            </h2>
            <p className="mt-1 text-sm text-white/70 leading-relaxed">
              Esto viene de un Use Case + repositorio JSON (Clean Architecture).
            </p>
          </div>
          <a className="text-sm text-white/80 hover:text-white" href="/events">
            Ver agenda →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((vm) => (
            <EventCard key={vm.href} vm={vm} />
          ))}
        </div>
      </section>
    </div>
  );
}

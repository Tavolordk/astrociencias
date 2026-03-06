import { buildContainer } from "@/config/di";
import { GlassCard } from "@/shared/presentation/ui/GlassCard";
import { Button } from "@/shared/presentation/ui/Button";
import { SectionHeader } from "@/shared/presentation/ui/SectionHeader";
import { DividerGlow } from "@/shared/presentation/ui/DividerGlow";
import { Reveal } from "@/shared/presentation/ui/Reveal";
import { HoverCard } from "@/shared/presentation/ui/HoverCard";
import { HeroGlow } from "@/shared/presentation/ui/HeroGlow";
import { EventCard } from "@/modules/events/presentation/components/EventCard";

export default async function HomePage() {
  const { listUpcomingEvents } = buildContainer();
  const upcoming = await listUpcomingEvents.execute({ limit: 2 });

  return (
    <div className="space-y-10">
      <section className="grid gap-5 md:grid-cols-12">
        <Reveal className="md:col-span-7" y={22}>
          <GlassCard className="relative overflow-hidden p-8">
            <HeroGlow />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--cyan)" }}
                />
                Astrociencias · divulgación · comunidad · ciencia ciudadana
              </div>

              <h1 className="mt-5 text-[clamp(36px,4.5vw,64px)] font-extrabold leading-[1.0] tracking-tight">
                Astrociencias para{" "}
                <span className="text-white/80">explorar, aprender</span> y{" "}
                <span className="text-white/80">participar</span>.
              </h1>

              <p className="mt-4 max-w-[62ch] text-base text-white/70 leading-relaxed">
                Somos una comunidad multidisciplinaria difundiendo astrociencias
                en México y el mundo. Te guiamos con experiencias claras: cielo
                de hoy, rutas de aprendizaje y proyectos para participar.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/explore">
                  <Button variant="primary">Explorar cielo hoy</Button>
                </a>
                <a href="/learn">
                  <Button>Iniciar una ruta</Button>
                </a>
                <a
                  href="/community"
                  className="text-sm text-white/75 hover:text-white self-center ml-2"
                >
                  Conocer la comunidad →
                </a>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {[
                  { t: "Cielo hoy", d: "Qué observar según tu ciudad." },
                  { t: "Rutas", d: "Aprende sin perderte." },
                  { t: "Proyectos", d: "Participa y aporta." },
                ].map((x, index) => (
                  <Reveal key={x.t} delay={0.08 * index}>
                    <HoverCard>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="font-semibold">{x.t}</div>
                        <div className="mt-1 text-xs text-white/60">{x.d}</div>
                      </div>
                    </HoverCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal className="md:col-span-5" delay={0.1} y={22}>
          <GlassCard className="p-8">
            <div className="text-xs text-white/60">Cielo hoy</div>
            <div className="mt-1 text-xl font-semibold">
              Recomendaciones rápidas
            </div>

            <div className="mt-5 grid gap-3">
              <label className="text-xs text-white/60">Ciudad</label>
              <select className="rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white outline-none">
                <option>CDMX</option>
                <option>Guadalajara</option>
                <option>Monterrey</option>
                <option>Puebla</option>
              </select>

              <HoverCard>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-white/60">
                    Qué ver hoy (fácil)
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
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
              </HoverCard>

              <a href="/explore">
                <Button variant="primary" className="w-full">
                  Abrir mapa del cielo
                </Button>
              </a>

              <div className="text-xs text-white/50 leading-relaxed">
                Próximo paso: aquí conectamos datos reales por ubicación.
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </section>

      <DividerGlow />

      <Reveal>
        <section className="space-y-5">
          <SectionHeader
            eyebrow="Qué hacemos"
            title="Divulgación con experiencias claras"
            desc="No solo publicamos contenido: te damos una forma simple de explorar, aprender y participar."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Explora",
                desc: "Mapa del cielo, objetos recomendados, guías rápidas por ciudad.",
                href: "/explore",
                label: "Ir a Explora",
              },
              {
                title: "Aprende",
                desc: "Rutas cortas para avanzar sin perderte.",
                href: "/learn",
                label: "Ver rutas",
              },
              {
                title: "Participa",
                desc: "Proyectos de ciencia ciudadana, capítulos y voluntariado.",
                href: "/community",
                label: "Unirme",
              },
            ].map((x, index) => (
              <Reveal key={x.title} delay={0.08 * index}>
                <HoverCard>
                  <GlassCard className="p-6">
                    <div className="text-lg font-semibold">{x.title}</div>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {x.desc}
                    </p>
                    <a
                      className="mt-4 inline-flex text-sm text-white/80 hover:text-white"
                      href={x.href}
                    >
                      {x.label} →
                    </a>
                  </GlassCard>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <DividerGlow />

      <Reveal>
        <section className="space-y-5">
          <SectionHeader
            eyebrow="Agenda"
            title="Próximos eventos"
            desc="Talleres, observaciones y charlas."
            right={
              <a
                className="text-sm text-white/80 hover:text-white"
                href="/events"
              >
                Ver agenda →
              </a>
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            {upcoming.map((vm, index) => (
              <Reveal key={vm.href} delay={0.08 * index}>
                <HoverCard>
                  <EventCard vm={vm} />
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <DividerGlow />

      <Reveal>
        <section className="space-y-5 pb-8">
          <SectionHeader
            eyebrow="Únete"
            title="Lleva Astrociencias a tu ciudad o escuela"
            desc="Buscamos voluntarios, ponentes y aliados."
          />
          <GlassCard className="p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">Newsletter</div>
              <p className="mt-1 text-sm text-white/70">Eventos + recursos.</p>
            </div>
            <form className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
              <input
                className="w-full md:w-[320px] rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white placeholder:text-white/40 outline-none"
                placeholder="tu-correo@ejemplo.com"
                type="email"
                name="email"
              />
              <Button variant="primary" type="submit">
                Suscribirme
              </Button>
            </form>
          </GlassCard>
        </section>
      </Reveal>
    </div>
  );
}

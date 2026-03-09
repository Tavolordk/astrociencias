export default function AboutAlliance() {
  const pillars = [
    {
      title: "Divulgación científica",
      description:
        "Impulsamos contenidos, iniciativas y experiencias que acercan la astronomía y las ciencias del espacio a públicos diversos.",
    },
    {
      title: "Educación y formación",
      description:
        "Promovemos rutas de aprendizaje, actividades educativas y proyectos que fortalecen la cultura científica en la comunidad.",
    },
    {
      title: "Colaboración entre proyectos",
      description:
        "Conectamos comunidades, medios, divulgadores y organizaciones para crear sinergias reales dentro del ecosistema astrocientífico.",
    },
    {
      title: "Innovación e impacto social",
      description:
        "Buscamos que las astrociencias inspiren nuevas vocaciones, pensamiento crítico y participación activa en la sociedad.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#05070D] py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,77,255,.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,.10),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-white/70 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Quiénes somos
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Una alianza para conectar
              <span className="block text-white/72">proyectos, comunidad y universo</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
              La <strong className="text-white">Alianza de Proyectos de Astrociencias</strong> es una red
              colaborativa que reúne iniciativas de divulgación, educación, comunicación,
              tecnología y cultura científica para fortalecer el ecosistema de las astrociencias.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              Más que agrupar logos o proyectos, buscamos construir una plataforma de colaboración:
              compartir conocimiento, amplificar impacto, generar comunidad y abrir nuevas rutas
              para que más personas se acerquen al universo desde distintas disciplinas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-2xl font-bold text-cyan-300">12+</div>
                <div className="mt-1 text-sm text-white/65">Iniciativas conectadas</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-2xl font-bold text-violet-300">8</div>
                <div className="mt-1 text-sm text-white/65">Países en diálogo</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="mt-1 text-sm text-white/65">Eventos y acciones</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.025))] p-6 shadow-[0_12px_45px_rgba(0,0,0,.22)] backdrop-blur-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-400/25 hover:bg-white/[0.045]"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#22D3EE]" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/68">
                      {pillar.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#0A1020]/80 p-5">
                <div className="text-xs uppercase tracking-[0.16em] text-cyan-300/80">
                  Manifiesto
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
                  Creemos que las astrociencias no deben vivirse de forma aislada. Su mayor fuerza
                  aparece cuando la divulgación, la educación, la creatividad, la tecnología y la
                  comunidad trabajan juntas para construir una cultura científica más abierta,
                  participativa e inspiradora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
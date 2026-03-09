import Image from "next/image";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  accent: string;
  glow: string;
};

const projects: Project[] = [
  {
    title: "NASA Space Apps Guerrero",
    category: "Innovación · Comunidad · Hackathon",
    description:
      "Una iniciativa que conecta talento, ciencia, tecnología y colaboración para resolver desafíos inspirados en el espacio y la Tierra.",
    image: "/images/8.png",
    accent: "from-[#7C4DFF] to-[#22D3EE]",
    glow: "rgba(34,211,238,.20)",
  },
  {
    title: "Roboticast",
    category: "Divulgación · Medios · Educación",
    description:
      "Proyecto enfocado en acercar temas científicos y tecnológicos a nuevas audiencias mediante formatos accesibles, dinámicos y atractivos.",
    image: "/images/2.jpeg",
    accent: "from-[#22D3EE] to-[#A855F7]",
    glow: "rgba(124,77,255,.20)",
  },
  {
    title: "Cosmos Latina",
    category: "Comunidad · Identidad · Cultura científica",
    description:
      "Una plataforma que impulsa la participación de comunidades hispanohablantes en la conversación astronómica y espacial contemporánea.",
    image: "/images/7.jpeg",
    accent: "from-[#EC4899] to-[#7C4DFF]",
    glow: "rgba(236,72,153,.18)",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="proyectos-destacados"
      className="relative overflow-hidden bg-[#05070D] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,77,255,.10),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,.10),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-white/70 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Proyectos destacados
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Iniciativas que dan forma al ecosistema
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
            La alianza reúne proyectos con enfoques distintos pero una visión compartida:
            divulgar, educar, inspirar y construir comunidad alrededor de las astrociencias.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.025))] shadow-[0_14px_45px_rgba(0,0,0,.22)] transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.055]"
            >
              {/* VISUAL */}
              <div className="relative h-[240px] overflow-hidden border-b border-white/10">
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background: `
                      radial-gradient(circle at 25% 25%, ${project.glow}, transparent 35%),
                      radial-gradient(circle at 80% 70%, rgba(255,255,255,.05), transparent 30%),
                      linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01))
                    `,
                  }}
                />

                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex aspect-square w-[160px] items-center justify-center rounded-[24px] border border-white/10 bg-[#0A1020]/85 p-6 shadow-[0_20px_50px_rgba(0,0,0,.28)]">
                    <div
                      className="absolute inset-0 rounded-[24px] opacity-60 blur-2xl"
                      style={{
                        background: `radial-gradient(circle, ${project.glow}, transparent 70%)`,
                      }}
                    />

                    <Image
                      src={project.image}
                      alt={project.title}
                      width={120}
                      height={120}
                      className="relative object-contain transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300/80">
                    {project.category}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#contacto"
                    className={`inline-flex items-center rounded-xl bg-gradient-to-r ${project.accent} px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]`}
                  >
                    Conocer
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-white"
                  >
                    Colaborar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#proyectos"
            className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-white"
          >
            Ver ecosistema completo
          </a>
        </div>
      </div>
    </section>
  );
}
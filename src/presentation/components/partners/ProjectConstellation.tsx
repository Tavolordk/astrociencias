"use client";

import Image from "next/image";

type PartnerNode = {
  id: number;
  name: string;
  logo: string;
  x: number;
  y: number;
  size?: number;
};

const partners: PartnerNode[] = [
  {
    id: 1,
    name: "NASA Space Apps Atoyac",
    logo: "/images/1.jpeg",
    x: 18,
    y: 18,
    size: 86,
  },
  { id: 2, name: "Roboticast", logo: "/images/2.jpeg", x: 50, y: 8, size: 96 },
  { id: 3, name: "Astro-Can", logo: "/images/3.jpeg", x: 80, y: 18, size: 84 },
  {
    id: 4,
    name: "Sociedad Astronómica Digital",
    logo: "/images/4.jpeg",
    x: 12,
    y: 52,
    size: 84,
  },
  { id: 5, name: "Astrozone", logo: "/images/5.jpeg", x: 86, y: 52, size: 92 },
  { id: 6, name: "Neri Vela", logo: "/images/6.jpeg", x: 22, y: 84, size: 84 },
  {
    id: 7,
    name: "Cosmos Latina",
    logo: "/images/7.jpeg",
    x: 78,
    y: 84,
    size: 84,
  },
];

export default function ProjectConstellation() {
  return (
    <section className="relative overflow-hidden bg-[#05070D] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,77,255,.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(34,211,238,.14),transparent_28%),radial-gradient(circle_at_bottom,rgba(168,85,247,.10),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Ecosistema de la alianza
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Constelación de proyectos
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            La Alianza de Proyectos de Astrociencias conecta medios,
            comunidades, iniciativas educativas, experiencias científicas y
            proyectos creativos que comparten una misma visión: acercar el
            universo a más personas.
          </p>
        </div>

        {/* Desktop / tablet constellation */}
        <div className="relative mt-16 hidden h-[760px] lg:block">
          {/* Nebula background */}
          <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))] backdrop-blur-sm" />

          {/* Decorative stars */}
          <ConstellationStars />

          {/* Connection lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
          >
            {partners.map((partner) => (
              <line
                key={`line-${partner.id}`}
                x1="500"
                y1="380"
                x2={(partner.x / 100) * 1000}
                y2={(partner.y / 100) * 760}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
            ))}
          </svg>

          {/* Central alliance */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(124,77,255,.28),rgba(34,211,238,.18),transparent_70%)] blur-3xl" />
              <div className="relative flex h-[230px] w-[230px] items-center justify-center rounded-full border border-white/15 bg-[#0A1020]/90 shadow-[0_0_60px_rgba(124,77,255,.18)]">
                <Image
                  src="/images/1.jpeg"
                  alt="Alianza de Proyectos de Astrociencias"
                  width={180}
                  height={180}
                  className="rounded-full object-contain"
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                Nodo central
              </div>
              <div className="mt-2 text-2xl font-semibold text-white">
                Alianza de Proyectos
              </div>
              <div className="text-lg text-white/72">de Astrociencias</div>
            </div>
          </div>

          {/* Partner nodes */}
          {partners.map((partner) => (
            <PartnerOrbitNode key={partner.id} partner={partner} />
          ))}
        </div>

        {/* Mobile / small screens fallback */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:hidden">
          <div className="rounded-3xl border border-white/10 bg-[#0A1020]/80 p-6 text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Image
                src="/images/2.jpeg"
                alt="Alianza de Proyectos de Astrociencias"
                width={92}
                height={92}
                className="rounded-full object-contain"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              Alianza de Proyectos de Astrociencias
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Organización articuladora que conecta proyectos y comunidades del
              ecosistema.
            </p>
          </div>

          {partners.map((partner) => (
            <div
              key={`mobile-${partner.id}`}
              className="rounded-3xl border border-white/10 bg-[#0A1020]/75 p-5 transition hover:border-cyan-400/30"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={72}
                    height={72}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <div className="text-base font-semibold text-white">
                    {partner.name}
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    Proyecto aliado
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerOrbitNode({ partner }: { partner: PartnerNode }) {
  return (
    <div
      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${partner.x}%`,
        top: `${partner.y}%`,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 scale-125 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.20),rgba(124,77,255,.12),transparent_70%)] opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

        <div
          className="relative flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-[#0F172A]/95 shadow-[0_0_25px_rgba(34,211,238,.08)] transition duration-300 group-hover:scale-105 group-hover:border-cyan-300/45 group-hover:shadow-[0_0_38px_rgba(34,211,238,.20)]"
          style={{
            width: `${partner.size ?? 84}px`,
            height: `${partner.size ?? 84}px`,
          }}
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={partner.size ?? 84}
            height={partner.size ?? 84}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[calc(100%+14px)] w-max -translate-x-1/2 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs text-white/80 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
          {partner.name}
        </div>
      </div>
    </div>
  );
}

function ConstellationStars() {
  const stars = [
    { left: "8%", top: "12%", size: 3 },
    { left: "14%", top: "28%", size: 2 },
    { left: "10%", top: "72%", size: 2 },
    { left: "24%", top: "62%", size: 3 },
    { left: "31%", top: "18%", size: 2 },
    { left: "42%", top: "10%", size: 2 },
    { left: "58%", top: "18%", size: 3 },
    { left: "70%", top: "28%", size: 2 },
    { left: "90%", top: "18%", size: 2 },
    { left: "84%", top: "70%", size: 3 },
    { left: "72%", top: "84%", size: 2 },
    { left: "38%", top: "86%", size: 2 },
    { left: "52%", top: "68%", size: 3 },
    { left: "60%", top: "52%", size: 2 },
    { left: "40%", top: "42%", size: 2 },
  ];

  return (
    <>
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white/70"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: "0 0 10px rgba(255,255,255,.45)",
          }}
        />
      ))}
    </>
  );
}

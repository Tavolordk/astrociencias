"use client";

import Image from "next/image";

export default function HeroAlliance() {
  return (
    <section id="alianza" className="relative overflow-hidden bg-[#05070D]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,77,255,.18),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(34,211,238,.18),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-white/70 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Red internacional de divulgación científica
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Alianza de Proyectos
            <br />
            de Astrociencias
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
            Una constelación de proyectos, comunidades y divulgadores que
            trabajan juntos para acercar la astronomía, el espacio y la
            ciencia a más personas en México y el mundo.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#22D3EE] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]">
              Explorar proyectos
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 text-white transition hover:bg-white/10">
              Unirme a la alianza
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 text-center text-white/70 sm:grid-cols-3 lg:text-left">
            <div>
              <p className="text-2xl font-bold text-cyan-400">12+</p>
              <p>Proyectos aliados</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-purple-400">8</p>
              <p>Países</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">30+</p>
              <p>Eventos científicos</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-[260px] w-[260px] rounded-full border border-white/10 sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] animate-spin-slow" />
          <div className="absolute h-[340px] w-[340px] rounded-full border border-white/5 sm:h-[430px] sm:w-[430px] md:h-[500px] md:w-[500px] animate-spin-slower" />

          <div className="absolute h-[180px] w-[180px] rounded-full bg-purple-500/30 blur-3xl sm:h-[220px] sm:w-[220px]" />

          <div className="relative rounded-full border border-white/10 bg-[#0A1020] p-6 shadow-xl sm:p-8 md:p-10">
            <Image
              src="/images/3-1.png"
              alt="Alianza de Proyectos de Astrociencias"
              width={180}
              height={180}
              className="h-[120px] w-[120px] object-contain sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
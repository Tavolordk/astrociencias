import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-white/10 bg-[#05070D] text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="text-center md:col-span-2 md:text-left">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image
                src="/images/3-1.png"
                alt="Alianza de Proyectos de Astrociencias"
                width={46}
                height={46}
                className="object-contain"
              />
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                Alianza
              </div>
              <div className="text-lg font-semibold">
                Proyectos de Astrociencias
              </div>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/65 md:mx-0">
            Una red de proyectos, comunidades y divulgadores que impulsa la
            cultura espacial, la educación científica y la divulgación de las
            astrociencias en México y el mundo.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
            Navegación
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><a href="#alianza" className="hover:text-white">La alianza</a></li>
            <li><a href="#proyectos" className="hover:text-white">Proyectos</a></li>
            <li><a href="#eventos" className="hover:text-white">Eventos</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
            Contacto
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li>contacto@alianzaastrociencias.org</li>
            <li>México · Latinoamérica · Global</li>
            <li>@alianzaastrociencias</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center text-xs text-white/45 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© 2026 Alianza de Proyectos de Astrociencias. Todos los derechos reservados.</p>
          <p>Diseñado para conectar proyectos, comunidad y universo.</p>
        </div>
      </div>
    </footer>
  );
}
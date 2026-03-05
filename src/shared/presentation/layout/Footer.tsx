export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto w-[min(1180px,92vw)] py-10 text-sm text-white/60 flex flex-col gap-6 md:flex-row md:justify-between">
        <div>
          <div className="text-white/80 font-semibold">Astrociencias</div>
          <div className="mt-2 max-w-[60ch] leading-relaxed">
            Difundimos astrociencias en México y el mundo. Eventos, recursos y
            comunidad multidisciplinaria.
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <div className="text-white/80 font-semibold">Sitio</div>
            <div className="mt-2 flex flex-col gap-2">
              <a className="hover:text-white" href="/explore">
                Explora
              </a>
              <a className="hover:text-white" href="/learn">
                Aprende
              </a>
              <a className="hover:text-white" href="/events">
                Agenda
              </a>
              <a className="hover:text-white" href="/community">
                Comunidad
              </a>
            </div>
          </div>
          <div>
            <div className="text-white/80 font-semibold">Contacto</div>
            <div className="mt-2 flex flex-col gap-2">
              <a className="hover:text-white" href="#">
                Instagram
              </a>
              <a className="hover:text-white" href="#">
                YouTube
              </a>
              <a className="hover:text-white" href="#">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
